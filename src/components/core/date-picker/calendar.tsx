'use client';

import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker, getDefaultClassNames } from 'react-day-picker';
import type { VariantProps } from 'class-variance-authority';
import { buttonVariants } from '@/components/core/button';
import { cn } from '@/lib/utils';

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: VariantProps<typeof buttonVariants>['variant'];
};

export function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = 'label',
  buttonVariant = 'ghost',
  locale,
  formatters,
  components,
  ...props
}: CalendarProps) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        'select-none rounded-sm border border-gunmetal/40 bg-obsidian p-3 text-titanium',
        className,
      )}
      captionLayout={captionLayout}
      locale={locale}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString(locale?.code, { month: 'short' }),
        ...formatters,
      }}
      classNames={{
        root: cn(defaultClassNames.root, 'relative'),
        months: cn(
          defaultClassNames.months,
          'relative flex flex-col gap-4 sm:flex-row',
        ),
        month: cn(defaultClassNames.month, 'space-y-4'),
        month_caption: cn(
          defaultClassNames.month_caption,
          'relative flex h-7 items-center justify-center pt-1 text-sm font-medium text-titanium',
        ),
        caption_label: cn(
          defaultClassNames.caption_label,
          'text-sm font-medium',
        ),
        nav: cn(
          defaultClassNames.nav,
          'pointer-events-none absolute inset-x-0 top-0 z-10 flex items-center justify-between gap-1',
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          'pointer-events-auto size-7 bg-transparent p-0 text-ash transition-colors hover:bg-gunmetal/40 hover:text-titanium focus-visible:bg-gunmetal/40 focus-visible:text-titanium focus-visible:ring-1 focus-visible:ring-hesaplamalarim-blue',
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          'pointer-events-auto size-7 bg-transparent p-0 text-ash transition-colors hover:bg-gunmetal/40 hover:text-titanium focus-visible:bg-gunmetal/40 focus-visible:text-titanium focus-visible:ring-1 focus-visible:ring-hesaplamalarim-blue',
        ),
        month_grid: cn(
          defaultClassNames.month_grid,
          'w-full border-collapse space-y-1',
        ),
        weekdays: cn(defaultClassNames.weekdays, 'flex'),
        weekday: cn(
          defaultClassNames.weekday,
          'w-9 rounded-sm text-center text-[0.8rem] font-normal text-ash',
        ),
        week: cn(defaultClassNames.week, 'mt-1.5 flex w-full'),
        day: cn(
          'relative p-0 text-center text-sm text-titanium focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-hesaplamalarim-blue/10 [&:has([aria-selected].day-range-end)]:rounded-e-sm [&:has([aria-selected].day-outside)]:bg-transparent',
          props.mode === 'range'
            ? '[&:has(>.day-range-end)]:rounded-e-sm [&:has(>.day-range-start)]:rounded-s-sm first:[&:has([aria-selected])]:rounded-s-sm last:[&:has([aria-selected])]:rounded-e-sm'
            : '[&:has([aria-selected])]:rounded-sm',
        ),
        day_button: cn(
          buttonVariants({ variant: 'ghost' }),
          'size-9 rounded-sm p-0 font-normal text-inherit transition-colors hover:bg-gunmetal/40 hover:text-titanium focus-visible:bg-hesaplamalarim-blue/15 focus-visible:text-titanium focus-visible:ring-1 focus-visible:ring-hesaplamalarim-blue aria-selected:opacity-100',
        ),
        range_start:
          'day-range-start rounded-s-sm bg-hesaplamalarim-blue text-white hover:bg-hesaplamalarim-blue',
        range_end:
          'day-range-end rounded-e-sm bg-hesaplamalarim-blue text-white hover:bg-hesaplamalarim-blue',
        today:
          'rounded-sm bg-hesaplamalarim-blue/15 font-semibold text-hesaplamalarim-blue [&>button]:hover:bg-hesaplamalarim-blue/25 [&>button]:hover:text-hesaplamalarim-blue [&>button]:focus-visible:bg-hesaplamalarim-blue/25 [&>button]:focus-visible:text-hesaplamalarim-blue',
        outside:
          'day-outside text-ash/35 [&>button]:text-ash/35 [&>button]:hover:bg-gunmetal/30 [&>button]:hover:text-ash/75 [&>button]:focus-visible:bg-gunmetal/30 [&>button]:focus-visible:text-ash/75 aria-selected:bg-hesaplamalarim-blue/5 aria-selected:text-ash/60',
        selected:
          'rounded-sm bg-hesaplamalarim-blue text-white [&>button]:bg-hesaplamalarim-blue [&>button]:text-white [&>button]:hover:bg-hesaplamalarim-blue/90 [&>button]:hover:text-white [&>button]:focus-visible:bg-hesaplamalarim-blue/90 [&>button]:focus-visible:text-white',
        disabled:
          'cursor-not-allowed text-ash/25 opacity-40 [&>button]:pointer-events-none',
        range_middle:
          'rounded-none aria-selected:bg-hesaplamalarim-blue/10 aria-selected:text-hesaplamalarim-blue',
        hidden: 'invisible',
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation, ...chevronProps }) => {
          if (orientation === 'left') {
            return (
              <ChevronLeft
                className="size-4 rtl:rotate-180"
                {...chevronProps}
              />
            );
          }
          return (
            <ChevronRight className="size-4 rtl:rotate-180" {...chevronProps} />
          );
        },
        ...components,
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';
