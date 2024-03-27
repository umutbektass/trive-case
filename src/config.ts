import {Pathnames} from 'next-intl/navigation';

export const locales = ['en', 'tr'] as const;

export const pathnames = {
  '/': '/',
  '/pathnames': {
    en: '/',
    tr: '/tr'
  }
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;