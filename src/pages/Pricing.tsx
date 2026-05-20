import { useTranslation } from 'react-i18next';

export function Pricing() {
  const { t } = useTranslation();
  return <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
    <h1 className="text-5xl font-serif mb-8 text-primary">{t('pricing_page.title')}</h1>
    <p className="text-xl text-charcoal/60 leading-relaxed max-w-3xl">{t('pricing_page.coming_soon')}</p>
  </div>;
}
