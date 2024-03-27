import createMiddleware from 'next-intl/middleware';
import { localePrefix, locales } from './navigation';

export default createMiddleware({
  // A list of all locales that are supported
  locales,
  localePrefix,
  defaultLocale: 'en',
 
  // Used when no locale matches
  localeDetection:false,

 

});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|_next|.*\\..*).*)']

};