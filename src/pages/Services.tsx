import { motion } from 'motion/react';
import { Droplet, Zap, Sparkles, Waves, Microscope, ShieldCheck, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import treatmentImg from '../assets/images/treatment_skincare_1779219956804.png';
import { useTranslation } from 'react-i18next';

export function Services() {
  const { t } = useTranslation();

  const categories = [
    {
      name: t('services_page.categories.facial'),
      items: [
        {
          title: t('services_page.service_details.hydrafacial.title'),
          price: `${t('services_page.actions.from')} ${t('services_page.service_details.hydrafacial.price')}`,
          duration: `60 ${t('services_page.labels.min')}`,
          desc: t('services_page.service_details.hydrafacial.desc'),
          icon: Droplet
        },
        {
          title: t('services_page.service_details.medical_facial.title'),
          price: `${t('services_page.actions.from')} ${t('services_page.service_details.medical_facial.price')}`,
          duration: `75 ${t('services_page.labels.min')}`,
          desc: t('services_page.service_details.medical_facial.desc'),
          icon: ShieldCheck
        }
      ]
    },
    {
      name: t('services_page.categories.medical'),
      items: [
        {
          title: t('services_page.service_details.injectables.title'),
          price: t('services_page.service_details.injectables.price'),
          duration: `30 ${t('services_page.labels.min')}`,
          desc: t('services_page.service_details.injectables.desc'),
          icon: Sparkles
        },
        {
          title: t('services_page.service_details.microneedling.title'),
          price: `${t('services_page.actions.from')} ${t('services_page.service_details.microneedling.price')}`,
          duration: `90 ${t('services_page.labels.min')}`,
          desc: t('services_page.service_details.microneedling.desc'),
          icon: Microscope
        }
      ]
    },
    {
      name: t('services_page.categories.laser'),
      items: [
        {
          title: t('services_page.service_details.laser_hair.title'),
          price: `${t('services_page.actions.from')} ${t('services_page.service_details.laser_hair.price')}`,
          duration: `45 ${t('services_page.labels.min')}`,
          desc: t('services_page.service_details.laser_hair.desc'),
          icon: Zap
        },
        {
          title: t('services_page.service_details.ipl.title'),
          price: `${t('services_page.actions.from')} ${t('services_page.service_details.ipl.price')}`,
          duration: `60 ${t('services_page.labels.min')}`,
          desc: t('services_page.service_details.ipl.desc'),
          icon: Waves
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section Wrapper */}
      <div className="bg-[#E6F8F9] pt-24 pb-4">
        <section className="relative mx-4 sm:mx-6 md:mx-8 mt-4 mb-4 rounded-[32px] bg-[#A5E3E6] overflow-hidden py-16 md:py-20 px-8 md:px-16 lg:px-24 border border-[#ACE3E7]/40 shadow-sm">
          {/* Soft Floral Watermark/Background */}
          <div className="absolute inset-0 opacity-[0.55] pointer-events-none select-none">
            <img 
              src="https://images.unsplash.com/photo-1516238840914-94dfc0c3a5e8?auto=format&fit=crop&q=80&w=1800" 
              className="w-full h-full object-cover"
              alt=""
            />
            {/* Subtle fade overlay to preserve text contrast on the left & blend image perfectly */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#A5E3E6] via-[#A5E3E6]/60 to-transparent" />
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 w-full">
            <div className="space-y-4 max-w-2xl">
              <h1 className="text-4xl sm:text-5xl md:text-[56px] font-serif font-medium text-charcoal tracking-tight leading-tight">
                {t('services_page.hero.title_1')} <span className="italic text-[#1F8D92]">{t('services_page.hero.title_2')}</span>
              </h1>
              <p className="text-charcoal/70 font-sans text-sm md:text-base leading-relaxed max-w-xl">
                {t('services_page.hero.description')}
              </p>
            </div>
            
            <div className="bg-[#1F8D92] rounded-full px-6 py-3 md:px-8 md:py-4 flex items-center gap-3 text-white text-[11px] sm:text-[12px] font-sans font-bold uppercase tracking-[0.15em] shadow-[0_4px_20px_rgba(31,141,146,0.15)] select-none shrink-0">
              <span className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer">{t('contact_page.hero.breadcrumb.home')}</span>
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#D4E95F] text-[#1F8D92] shrink-0">
                <ChevronRight size={11} className="stroke-[3.5]" />
              </span>
              <span className="text-[#D4E95F]">{t('nav.services')}</span>
            </div>
          </div>
        </section>
      </div>

      {/* Services Feature Block */}
      <section className="py-16 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="text-primary font-bold uppercase tracking-widest text-sm">{t('services_page.hero.badge')}</div>
            <h2 className="text-3xl md:text-4xl font-serif leading-tight text-charcoal animate-fade-in-up">
              Medical-Grade Precision & Care
            </h2>
            <p className="text-base text-charcoal/60 leading-relaxed max-w-xl animate-fade-in-up">
              Each aesthetic treatment is completely tailored to deliver immediate, visible changes while supporting your long-term skin health.
            </p>
            <div className="flex gap-4 animate-fade-in-up">
               <Link to="/book" className="px-8 py-4 bg-primary text-white rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all">
                 {t('services_page.hero.cta')}
               </Link>
            </div>
          </div>
          <div className="relative rounded-[40px] overflow-hidden aspect-[4/3] shadow-xl">
             <img
               src={treatmentImg}
               alt="Cutisure Treatment"
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 max-w-7xl mx-auto">
        {categories.map((category, catIdx) => (
          <div key={category.name} className="mb-24">
            <div className="flex items-center gap-6 mb-12">
               <h2 className="text-3xl font-serif whitespace-nowrap">{category.name}</h2>
               <div className="h-[1px] bg-charcoal/10 w-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.items.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-[40px] bg-mint-light/50 border border-charcoal/5 hover:bg-white hover:shadow-2xl transition-all duration-500 flex gap-6"
                >
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                    <item.icon className="text-primary" size={28} />
                  </div>
                  <div className="space-y-4 flex-grow">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-serif">{item.title}</h3>
                      <div className="text-sm font-bold text-primary whitespace-nowrap ml-4">{item.price}</div>
                    </div>
                    <p className="text-charcoal/60 leading-relaxed">{item.desc}</p>
                    <div className="flex items-center justify-between pt-4">
                      <span className="text-xs font-bold uppercase tracking-widest text-charcoal/40">{item.duration}</span>
                      <Link to="/book" className="flex items-center gap-2 text-sm font-bold text-primary group underline underline-offset-4">
                        {t('services_page.actions.book_now')} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* After-Care Note */}
      <section className="px-6 max-w-7xl mx-auto mb-20">
         <div className="glass p-12 rounded-[40px] text-center space-y-6">
            <h3 className="text-3xl font-serif">{t('services_page.footer_note.title')}</h3>
            <p className="text-charcoal/60 max-w-2xl mx-auto">
              {t('services_page.footer_note.desc')}
            </p>
            <div className="flex flex-wrap justify-center gap-8 pt-4">
               {(t('services_page.footer_note.items', { returnObjects: true }) as string[]).map(item => (
                 <div key={item} className="flex items-center gap-2 text-sm font-bold">
                   <CheckCircle2 size={18} className="text-primary" />
                   {item}
                 </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
