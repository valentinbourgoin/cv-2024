import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';
 
export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale as any)) notFound();

  const about = await import(`../messages/${locale}/about.json`);
  const common = await import(`../messages/${locale}/common.json`);
  const contact = await import(`../messages/${locale}/contact.json`);
  const intro = await import(`../messages/${locale}/intro.json`);
  const resume = await import(`../messages/${locale}/resume.json`);
  const services = await import(`../messages/${locale}/services.json`);
 
  return {
    messages: {
      about: about.default,
      common: common.default,
      contact: contact.default,
      intro: intro.default,
      resume: resume.default,
      services: services.default,
      
    }
  };
});