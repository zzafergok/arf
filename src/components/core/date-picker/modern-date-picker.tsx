'use client';

import React, { useState, useMemo } from 'react';
import { Calendar as CalendarIcon, X } from 'lucide-react';
import { tr } from 'date-fns/locale/tr';
import { enUS } from 'date-fns/locale/en-US';

import { Button } from '@/components/core/button';
import { Calendar } from './calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/core/popover';
import { useCurrentLocale } from '@/components/providers/client-locale-provider';
import { toBCP47Locale } from '@/i18n/routing';
import { cn } from '@/lib/utils';

import { datePickerCopy } from './constants';
import type { ModernDatePickerProps } from './types';

export function ModernDatePicker({
  value,
  onChange,
  placeholder,
  disabled = false,
  clearable = true,
  minDate,
  maxDate,
  className,
  error = false,
  includeTime = false,
  locale,
}: ModernDatePickerProps) {
  const activeLocale = useCurrentLocale();
  const resolvedLocale = locale ?? activeLocale;
  const copy = datePickerCopy[resolvedLocale];
  const bcp47Locale = toBCP47Locale(resolvedLocale);
  const dateLocale = resolvedLocale === 'tr' ? tr : enUS;
  const weekStartsOn = resolvedLocale === 'tr' ? 1 : 0;

  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState<Date>(value ?? new Date());

  const displayValue = useMemo(() => {
    if (!value) return placeholder ?? copy.selectDate;
    return value.toLocaleDateString(bcp47Locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }, [bcp47Locale, copy.selectDate, value, placeholder]);

  const handleDateSelect = (date: Date | undefined) => {
    if (!date) return;
    if (includeTime) {
      const d = new Date(date);
      d.setHours(0, 0, 0, 0);
      onChange(d);
    } else {
      onChange(date);
    }
    setIsOpen(false);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(null);
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (open && value) {
      setCurrentMonth(value);
    }
  };

  return (
    <Popover open={isOpen} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          data-slot="modern-date-picker-trigger"
          className={cn(
            'h-10 w-full justify-start px-3 py-2 text-left font-normal',
            !value && 'text-ash/70',
            error && 'border-alert-red focus:border-alert-red',
            'transition-all duration-200 hover:bg-gunmetal/10',
            className,
          )}
          disabled={disabled}
        >
          <CalendarIcon className="mr-2 h-4 w-4 shrink-0 text-ash" />
          <span className="truncate">{displayValue}</span>
          {clearable && value && !disabled && (
            <X
              className="ml-auto h-4 w-4 shrink-0 text-ash transition-colors hover:text-titanium"
              onClick={handleClear}
            />
          )}
        </Button>
      </PopoverTrigger>

      <PopoverContent
        data-slot="modern-date-picker-content"
        className="z-[150] w-auto max-w-[calc(100vw-2rem)] border border-gunmetal bg-obsidian p-0 shadow-xl"
        align="start"
        sideOffset={8}
        collisionPadding={12}
      >
        <Calendar
          mode="single"
          selected={value ?? undefined}
          onSelect={handleDateSelect}
          month={currentMonth}
          onMonthChange={setCurrentMonth}
          locale={dateLocale}
          weekStartsOn={weekStartsOn}
          labels={{
            labelPrevious: () => copy.previousMonth,
            labelNext: () => copy.nextMonth,
          }}
          disabled={(date) => {
            if (minDate && date < minDate) return true;
            if (maxDate && date > maxDate) return true;
            return false;
          }}
          className="border-0 bg-transparent shadow-none"
        />

        {/* Footer */}
        <div className="flex items-center justify-between gap-3 border-t border-gunmetal/70 px-3 py-2.5">
          <div className="text-xs text-ash">
            {value
              ? value.toLocaleDateString(bcp47Locale)
              : (copy.noDate as string)}
          </div>
          <Button
            type="button"
            size="sm"
            variant="outline"
            onClick={() => setIsOpen(false)}
            className="h-7 px-3 text-xs"
          >
            {copy.done as string}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
