import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'tr'],
 
  // Used when no locale matches
  defaultLocale: 'tr',

  localePrefix: 'as-needed',
 

});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(de|en|tr)/:path*']
};