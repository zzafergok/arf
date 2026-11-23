'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { ExternalLink, Zap } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Button } from '@/components/core/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/core/card';
import { Link } from '@/components/core/link';
import {
  AmountField,
  DateField,
  SelectField,
  TextField,
} from '@/components/forms';
import { getCategoryTheme } from '../registry/category-theme';
import {
  CalculatorDefinition,
  CalculatorExecutionResult,
  CalculatorFormRawValues,
} from '../registry/types';
import { buildCalculatorSchema } from './dynamic-calculator-schema';
import { DynamicResultCard } from './dynamic-result-card';

interface DynamicCalculatorCardProps {
  calculator: CalculatorDefinition;
  showFullPageLink?: boolean;
}

export function DynamicCalculatorCard({
  calculator,
  showFullPageLink = false,
}: DynamicCalculatorCardProps) {
  const theme = getCategoryTheme(calculator.categoryId);

  const defaultValues = useMemo(() => {
    const acc: CalculatorFormRawValues = {};
    for (const f of calculator.fields) {
      acc[f.name] = f.defaultValue;
    }
    return acc;
  }, [calculator]);

  const schema = useMemo(
    () => buildCalculatorSchema(calculator.fields),
    [calculator.fields],
  );

  const methods = useForm<CalculatorFormRawValues>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const [result, setResult] = useState<CalculatorExecutionResult>(() =>
    calculator.calculate(defaultValues),
  );
  const [prevCalcId, setPrevCalcId] = useState<string>(calculator.id);
  const [tick, setTick] = useState<number>(0);

  if (prevCalcId !== calculator.id) {
    setPrevCalcId(calculator.id);
    setResult(calculator.calculate(defaultValues));
  }

  useEffect(() => {
    methods.reset(defaultValues);
  }, [defaultValues, methods]);

  const onSubmit = (values: CalculatorFormRawValues) => {
    const computed = calculator.calculate(values);
    setResult(computed);
    setTick((t) => t + 1);
  };

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <Card
          className={`relative overflow-hidden ${theme.border} bg-obsidian/95 shadow-lg backdrop-blur-md`}
        >
          <div className={`h-1.5 w-full ${theme.topBar}`} />
          <CardHeader>
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div className="space-y-1">
                <CardTitle className="font-display text-heading-sm font-bold text-titanium">
                  {calculator.title}
                </CardTitle>
                <CardDescription className="font-sans text-caption font-normal leading-relaxed text-ash">
                  {calculator.description}
                </CardDescription>
              </div>
              {showFullPageLink && (
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="font-sans text-micro font-semibold"
                >
                  <Link href={`/${calculator.categoryId}/${calculator.id}`}>
                    Özel Sayfa
                    <ExternalLink className="ml-1.5 h-3 w-3" />
                  </Link>
                </Button>
              )}
            </div>
            {calculator.legalNote && (
              <p
                className={`mt-1.5 inline-block rounded-md ${theme.bgSoft} px-2.5 py-1 font-sans text-2xs font-medium ${theme.text}`}
              >
                {calculator.legalNote}
              </p>
            )}
          </CardHeader>
          <CardContent>
            <FormProvider {...methods}>
              <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className="space-y-4"
                noValidate
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {calculator.fields.map((field) => {
                    if (field.type === 'select' && field.options) {
                      return (
                        <SelectField
                          key={field.name}
                          name={field.name}
                          label={field.label}
                          options={field.options}
                          required={field.required}
                        />
                      );
                    }
                    if (field.type === 'date') {
                      return (
                        <DateField
                          key={field.name}
                          name={field.name}
                          label={field.label}
                          required={field.required}
                        />
                      );
                    }
                    if (field.type === 'amount') {
                      return (
                        <AmountField
                          key={field.name}
                          name={field.name}
                          label={field.label}
                          placeholder={field.placeholder}
                          required={field.required}
                        />
                      );
                    }
                    return (
                      <TextField
                        key={field.name}
                        name={field.name}
                        label={field.label}
                        type="number"
                        min={field.min}
                        max={field.max}
                        step={field.step ?? 'any'}
                        placeholder={field.placeholder}
                        required={field.required}
                      />
                    );
                  })}
                </div>

                <Button
                  type="submit"
                  className={`w-full ${theme.buttonBg} font-sans text-body-sm font-bold text-primary-foreground shadow-md transition-transform active:scale-[0.99]`}
                >
                  <Zap className="mr-1.5 h-4 w-4" />
                  Hesapla
                </Button>
              </form>
            </FormProvider>
          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-5">
        <DynamicResultCard result={result} calculationTick={tick} />
      </div>
    </div>
  );
}
