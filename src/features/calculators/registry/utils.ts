import { formatCurrency, parseAmountInput } from '@/lib/utils';

/**
 * Form alanından gelen string/number değeri güvenli şekilde sayıya dönüştürür.
 */
export function num(v: string | number | undefined, fallback = 0): number {
  if (typeof v === 'number') return Number.isFinite(v) ? v : fallback;
  if (!v) return fallback;
  const parsed = parseAmountInput(String(v));
  return parsed !== null && Number.isFinite(parsed)
    ? parsed
    : Number(v) || fallback;
}

/**
 * Tutarı Türk Lirası (TRY) formatında biçimlendirir.
 */
export function tl(amount: number): string {
  return formatCurrency(amount, 'TRY', 'tr-TR');
}
