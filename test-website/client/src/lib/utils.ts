import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type FormatCurrencyOptions = {
  locale?: string;
  currencyDisplay?: 'symbol' | 'code' | 'name';
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
};

export function formatCurrency(
  amount: number,
  currency: string,
  options: FormatCurrencyOptions = {}
): string {
  const {
    locale = 'en-US',
    currencyDisplay = 'symbol',
    minimumFractionDigits = 2,
    maximumFractionDigits = 2,
  } = options;

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    currencyDisplay,
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(amount);
}

type FormatDateOptions = {
  locale?: string;
  dateStyle?: 'full' | 'long' | 'medium' | 'short';
  timeStyle?: 'full' | 'long' | 'medium' | 'short';
};

export function formatDate(
  date: Date | string | number,
  options: FormatDateOptions = {}
): string {
  const {
    locale = 'en-US',
    dateStyle = 'medium',
    timeStyle,
  } = options;

  const dateObj = new Date(date);
  return new Intl.DateTimeFormat(locale, {
    dateStyle,
    timeStyle,
  }).format(dateObj);
}

type FormatNumberOptions = {
  locale?: string;
  style?: 'decimal' | 'percent' | 'unit';
  unit?: string;
  unitDisplay?: 'long' | 'short' | 'narrow';
  notation?: 'standard' | 'scientific' | 'engineering' | 'compact';
};

export function formatNumber(
  value: number,
  options: FormatNumberOptions = {}
): string {
  const {
    locale = 'en-US',
    style = 'decimal',
    unit,
    unitDisplay = 'short',
    notation = 'standard',
  } = options;

  return new Intl.NumberFormat(locale, {
    style,
    unit,
    unitDisplay,
    notation,
    ...(style === 'percent' && { maximumFractionDigits: 2 }),
  }).format(value);
}
