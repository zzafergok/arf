import { addDays, startOfMonth, endOfMonth } from 'date-fns';
import type { Locale } from '@/i18n/routing';
import type { PresetOption, TimeZoneOption } from './types';

export const timeZones: TimeZoneOption[] = [
  { value: 'Europe/Istanbul', label: 'İstanbul (GMT+3)' },
  { value: 'UTC', label: 'UTC (GMT+0)' },
  { value: 'America/New_York', label: 'New York (EST)' },
  { value: 'America/Los_Angeles', label: 'Los Angeles (PST)' },
  { value: 'Europe/London', label: 'London (GMT)' },
  { value: 'Asia/Tokyo', label: 'Tokyo (JST)' },
];

export function getDefaultPresets(locale: Locale): {
  single: PresetOption[];
  range: PresetOption[];
} {
  if (locale === 'en') {
    return {
      single: [
        { label: 'Today', value: new Date() },
        { label: 'Tomorrow', value: addDays(new Date(), 1) },
        { label: 'In 1 week', value: addDays(new Date(), 7) },
      ],
      range: [
        {
          label: 'Last 7 days',
          value: { from: addDays(new Date(), -7), to: new Date() },
        },
        {
          label: 'Last 30 days',
          value: { from: addDays(new Date(), -30), to: new Date() },
        },
        {
          label: 'This month',
          value: { from: startOfMonth(new Date()), to: endOfMonth(new Date()) },
        },
      ],
    };
  }

  return {
    single: [
      { label: 'Bugün', value: new Date() },
      { label: 'Yarın', value: addDays(new Date(), 1) },
      { label: 'Bir hafta sonra', value: addDays(new Date(), 7) },
    ],
    range: [
      {
        label: 'Son 7 gün',
        value: { from: addDays(new Date(), -7), to: new Date() },
      },
      {
        label: 'Son 30 gün',
        value: { from: addDays(new Date(), -30), to: new Date() },
      },
      {
        label: 'Bu ay',
        value: { from: startOfMonth(new Date()), to: endOfMonth(new Date()) },
      },
    ],
  };
}

export const defaultPresets = getDefaultPresets('tr');

export const datePickerCopy = {
  tr: {
    days: ['Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct', 'Pa'],
    noDate: 'Tarih seçilmedi',
    selectDate: 'Tarih seçin',
    done: 'Tamam',
    clear: 'Temizle',
    close: 'Kapat',
    previousMonth: 'Önceki ay',
    nextMonth: 'Sonraki ay',
    previousYear: 'Önceki yıl',
    nextYear: 'Sonraki yıl',
    selectedDatesSuffix: 'tarih seçildi',
    daysSuffix: 'gün',
    selectEndDate: 'Bitiş tarihi seçin',
    quickSelection: 'Hızlı Seçim',
    time: 'Saat',
    timezone: 'Zaman Dilimi',
    monthYearPlaceholder: 'Ay/Yıl seçin',
    noMonthYear: 'Ay/Yıl seçilmedi',
    months: [
      'Ocak',
      'Şubat',
      'Mart',
      'Nisan',
      'Mayıs',
      'Haziran',
      'Temmuz',
      'Ağustos',
      'Eylül',
      'Ekim',
      'Kasım',
      'Aralık',
    ],
    quickMonthLabels: ['Bu Ay', 'Geçen Ay', '6 Ay Önce', '1 Yıl Önce'],
  },
  en: {
    days: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
    noDate: 'No date selected',
    selectDate: 'Select date',
    done: 'Done',
    clear: 'Clear',
    close: 'Close',
    previousMonth: 'Previous month',
    nextMonth: 'Next month',
    previousYear: 'Previous year',
    nextYear: 'Next year',
    selectedDatesSuffix: 'dates selected',
    daysSuffix: 'days',
    selectEndDate: 'Select end date',
    quickSelection: 'Quick Select',
    time: 'Time',
    timezone: 'Timezone',
    monthYearPlaceholder: 'Select Month/Year',
    noMonthYear: 'No month/year selected',
    months: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    quickMonthLabels: [
      'This Month',
      'Last Month',
      '6 Months Ago',
      '1 Year Ago',
    ],
  },
} satisfies Record<Locale, Record<string, string | string[]>>;

export const MONTHS = datePickerCopy.tr.months;

export interface QuickDateItem {
  label: string;
  getValue: () => string;
}

export const QUICK_DATES: QuickDateItem[] = [
  {
    label: 'Bu Ay',
    getValue: () => {
      const n = new Date();
      return `${n.getFullYear()}-${(n.getMonth() + 1).toString().padStart(2, '0')}`;
    },
  },
  {
    label: 'Geçen Ay',
    getValue: () => {
      const n = new Date();
      n.setMonth(n.getMonth() - 1);
      return `${n.getFullYear()}-${(n.getMonth() + 1).toString().padStart(2, '0')}`;
    },
  },
  {
    label: '6 Ay Önce',
    getValue: () => {
      const n = new Date();
      n.setMonth(n.getMonth() - 6);
      return `${n.getFullYear()}-${(n.getMonth() + 1).toString().padStart(2, '0')}`;
    },
  },
  {
    label: '1 Yıl Önce',
    getValue: () => {
      const n = new Date();
      n.setFullYear(n.getFullYear() - 1);
      return `${n.getFullYear()}-${(n.getMonth() + 1).toString().padStart(2, '0')}`;
    },
  },
];
