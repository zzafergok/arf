'use client';

import React, { useRef, useState } from 'react';
import { Calendar as CalendarIcon, X } from 'lucide-react';
import { isSameDay } from 'date-fns';
import { tr } from 'date-fns/locale/tr';
import { enUS } from 'date-fns/locale/en-US';
import type { DateRange as DayPickerDateRange } from 'react-day-picker';

import { Button } from '@/components/core/button';
import { Calendar } from './calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/core/popover';
import { useCurrentLocale } from '@/components/providers/client-locale-provider';
import { cn } from '@/lib/utils';

import { datePickerCopy } from './constants';
import {
  DatePickerFooter,
  PresetSidebar,
  TimePicker,
} from './date-picker-parts';
import { useDatePicker } from './use-date-picker';
import type { DatePickerProps, DateRange } from './types';

export function DatePicker(props: DatePickerProps) {
  const activeLocale = useCurrentLocale();
  const resolvedLocale = props.locale ?? activeLocale;
  const copy = datePickerCopy[resolvedLocale];
  const {
    value,
    mode = 'single',
    enableTime = false,
    enableTimezone = false,
    placeholder = copy.selectDate,
    showWeekNumbers = false,
    weekStartsOn = resolvedLocale === 'tr' ? 1 : 0,
    disabled = false,
    readOnly = false,
    clearable = true,
    showFooter = true,
    className,
    enablePresets = false,
    onFocus,
    onBlur,
  } = props;

  const triggerRef = useRef<HTMLButtonElement>(null);
  const dateLocale = resolvedLocale === 'tr' ? tr : enUS;
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState<Date>(
    value instanceof Date ? value : new Date(),
  );

  const {
    selectedTime,
    selectedTimezone,
    setSelectedTimezone,
    inputValue,
    presets,
    isDateDisabled,
    applySelectedTime,
    handleTimeChange,
    handlePresetSelect,
    handleClear,
  } = useDatePicker({ ...props, locale: resolvedLocale });

  const { onMonthChange, onYearChange } = props;

  const handleMonthChange = (month: Date) => {
    setCurrentMonth(month);
    onMonthChange?.(month);
    if (month.getFullYear() !== currentMonth.getFullYear()) {
      onYearChange?.(month.getFullYear());
    }
  };

  const handleSingleSelect = (date: Date | undefined) => {
    if (!date) return;
    props.onChange?.(applySelectedTime(date));
    if (!enableTime) setIsOpen(false);
  };

  const handleMultipleSelect = (dates: Date[] | undefined) => {
    const currentDates = Array.isArray(value) ? value : [];
    props.onChange?.(
      (dates ?? []).map(
        (date) =>
          currentDates.find((currentDate) => isSameDay(currentDate, date)) ??
          applySelectedTime(date),
      ),
    );
  };

  const handleRangeSelect = (range: DayPickerDateRange | undefined) => {
    const nextRange = {
      from: range?.from ? applySelectedTime(range.from) : null,
      to: range?.to ? applySelectedTime(range.to) : null,
    };
    props.onChange?.(nextRange);
    if (nextRange.to && !enableTime) setIsOpen(false);
  };

  const handlePresetSelection = (presetValue: Date | Date[] | DateRange) => {
    handlePresetSelect(presetValue);
    if (mode === 'single' && !enableTime) setIsOpen(false);
  };

  const rdpSelected =
    mode === 'single' && value instanceof Date
      ? value
      : mode === 'multiple' && Array.isArray(value)
        ? value
        : mode === 'range' &&
            value &&
            typeof value === 'object' &&
            'from' in value
          ? ({
              from: (value as DateRange).from ?? undefined,
              to: (value as DateRange).to ?? undefined,
            } satisfies DayPickerDateRange)
          : undefined;

  const commonCalendarProps = {
    month: currentMonth,
    onMonthChange: handleMonthChange,
    locale: dateLocale,
    weekStartsOn,
    showWeekNumber: showWeekNumbers,
    labels: {
      labelPrevious: () => copy.previousMonth,
      labelNext: () => copy.nextMonth,
    },
    disabled: isDateDisabled,
    className: 'border-0 bg-transparent shadow-none',
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          ref={triggerRef}
          variant="outline"
          data-slot="date-picker-trigger"
          className={cn(
            'justify-start text-left font-normal',
            !value && 'text-ash',
            className,
          )}
          disabled={disabled}
          onClick={() => !readOnly && setIsOpen(true)}
          onFocus={onFocus}
          onBlur={onBlur}
        >
          <CalendarIcon className="mr-2 h-4 w-4 shrink-0" />
          <span className="truncate">{inputValue || placeholder}</span>
          {clearable && value && !disabled && !readOnly && (
            <X
              className="ml-auto h-4 w-4 shrink-0 opacity-50 hover:opacity-100"
              onClick={(e) => {
                e.stopPropagation();
                handleClear();
              }}
            />
          )}
        </Button>
      </PopoverTrigger>

      <PopoverContent
        data-slot="date-picker-content"
        className="w-auto p-0"
        align="start"
        sideOffset={8}
      >
        <div className={cn('flex', enablePresets && 'min-w-[600px]')}>
          <PresetSidebar
            enablePresets={enablePresets}
            presets={presets}
            locale={resolvedLocale}
            onPresetSelect={handlePresetSelection}
          />

          <div className="flex-1">
            {mode === 'single' && (
              <Calendar
                mode="single"
                selected={rdpSelected as Date | undefined}
                onSelect={handleSingleSelect}
                {...commonCalendarProps}
              />
            )}
            {mode === 'multiple' && (
              <Calendar
                mode="multiple"
                selected={rdpSelected as Date[] | undefined}
                onSelect={handleMultipleSelect}
                {...commonCalendarProps}
              />
            )}
            {mode === 'range' && (
              <Calendar
                mode="range"
                selected={rdpSelected as DayPickerDateRange | undefined}
                onSelect={handleRangeSelect}
                {...commonCalendarProps}
              />
            )}

            {enableTime && (
              <TimePicker
                hours={selectedTime.hours}
                minutes={selectedTime.minutes}
                enableTimezone={enableTimezone}
                selectedTimezone={selectedTimezone}
                locale={resolvedLocale}
                onTimeChange={handleTimeChange}
                onTimezoneChange={setSelectedTimezone}
              />
            )}

            {showFooter && (
              <DatePickerFooter
                mode={mode}
                value={value}
                clearable={clearable}
                enableTime={enableTime}
                locale={resolvedLocale}
                onClear={handleClear}
                onClose={() => setIsOpen(false)}
              />
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
