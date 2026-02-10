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

type TranslateOptions = {
  locale?: string;
  fallback?: string;
  values?: Record<string, string | number>;
};

interface Translations {
  [key: string]: {
    [locale: string]: string;
  };
}

const translations: Translations = {
  'welcome.message': {
    'en-US': 'Welcome to our application!',
    'es-ES': '¡Bienvenido a nuestra aplicación!',
    'fr-FR': 'Bienvenue dans notre application!',
  },
  'logout': {
    'en-US': 'Logout',
    'es-ES': 'Cerrar sesión',
    'fr-FR': 'Se déconnecter',
  },
  'save': {
    'en-US': 'Save',
    'es-ES': 'Guardar',
    'fr-FR': 'Enregistrer',
  },
  'cancel': {
    'en-US': 'Cancel',
    'es-ES': 'Cancelar',
    'fr-FR': 'Annuler',
  },
  'delete.confirm': {
    'en-US': 'Are you sure you want to delete this item?',
    'es-ES': '¿Está seguro de que desea eliminar este elemento?',
    'fr-FR': 'Êtes-vous sûr de vouloir supprimer cet élément?',
  },
  'items.count': {
    'en-US': '{count} items',
    'es-ES': '{count} elementos',
    'fr-FR': '{count} éléments',
  },
  'price': {
    'en-US': '{amount} {currency}',
    'es-ES': '{amount} {currency}',
    'fr-FR': '{amount} {currency}',
  },
  'welcome.user': {
    'en-US': 'Welcome back, {name}!',
    'es-ES': '¡Bienvenido de nuevo, {name}!',
    'fr-FR': 'Bienvenue à nouveau, {name}!',
  },
};

export function translate(
  key: string,
  options: TranslateOptions = {}
): string {
  const {
    locale = 'en-US',
    fallback = key,
    values = {},
  } = options;

  const translation = translations[key]?.[locale];
  if (!translation) return fallback;

  return Object.entries(values).reduce((result, [placeholder, value]) => {
    return result.replace(`{${placeholder}}`, String(value));
  }, translation);
}

export function setTranslations(newTranslations: Translations): void {
  Object.assign(translations, newTranslations);
}

export function getSupportedLocales(): string[] {
  const allLocales = new Set<string>();
  for (const key in translations) {
    for (const locale in translations[key]) {
      allLocales.add(locale);
    }
  }
  return Array.from(allLocales);
}

export function useLocale() {
  const [locale, setLocale] = React.useState(() => {
    const stored = localStorage.getItem('locale');
    return stored || 'en-US';
  });

  const setLocaleWithStorage = React.useCallback((newLocale: string) => {
    localStorage.setItem('locale', newLocale);
    setLocale(newLocale);
  }, []);

  return [locale, setLocaleWithStorage] as const;
}
