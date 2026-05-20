import { motion } from 'motion/react';
import { Phone, MapPin, Mail, ChevronRight, Wind } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Contact() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-[#E3F5F5] overflow-hidden">
        {/* Soft Floral Watermark/Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1516238840914-94dfc0c3a5e8?auto=format&fit=crop&q=80&w=1800" 
            className="w-full h-full object-cover mix-blend-overlay"
            alt=""
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-4 max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-serif font-medium text-charcoal tracking-tight">
              {t('contact_page.hero.title')}
            </h1>
            <p className="text-charcoal/60 leading-relaxed max-w-lg">
              {t('contact_page.hero.description')}
            </p>
          </div>
          
          <div className="bg-[#1E4D4E] rounded-full px-8 py-4 flex items-center gap-3 text-white text-[13px] font-bold uppercase tracking-wider">
            <span className="opacity-60">{t('contact_page.hero.breadcrumb.home')}</span>
            <ChevronRight size={14} className="text-secondary" />
            <span className="text-secondary">{t('contact_page.hero.breadcrumb.contact')}</span>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 px-6 relative -mt-12 z-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#F0F9F9] rounded-[40px] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.05)] grid grid-cols-1 lg:grid-cols-2">
            {/* Left Image */}
            <div className="relative h-[400px] lg:h-auto p-12 lg:p-16">
              <div className="relative h-full w-full rounded-[32px] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&q=80&w=1200" 
                  className="w-full h-full object-cover"
                  alt="Contact Us"
                />
                {/* Circular Badge */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/90 backdrop-blur-md rounded-full flex flex-col items-center justify-center border border-white/40 shadow-xl text-center p-4">
                  <div className="text-secondary mb-1">
                    <Wind size={24} />
                  </div>
                  <span className="text-[7px] font-bold uppercase tracking-widest text-charcoal/40 mb-0.5">{t('contact_page.form.badge')}</span>
                  <span className="text-[8px] font-bold uppercase tracking-wider text-primary">{t('contact_page.form.sub_badge')}</span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="p-12 lg:p-20 flex flex-col justify-center">
              <div className="space-y-2 mb-10">
                <h2 className="text-4xl md:text-5xl font-serif text-charcoal leading-tight">
                  {t('contact_page.form.title')}
                </h2>
                <p className="text-charcoal/60 leading-relaxed text-sm">
                  {t('contact_page.form.description')}
                </p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[13px] font-serif text-charcoal font-medium ml-1">{t('contact_page.form.labels.first_name')}</label>
                    <input 
                      type="text" 
                      placeholder={t('contact_page.form.placeholders.first_name')}
                      className="w-full bg-white rounded-xl py-4 px-6 outline-none shadow-[0_5px_15px_rgba(0,0,0,0.02)] focus:ring-2 focus:ring-primary/10 transition-all text-sm" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[13px] font-serif text-charcoal font-medium ml-1">{t('contact_page.form.labels.last_name')}</label>
                    <input 
                      type="text" 
                      placeholder={t('contact_page.form.placeholders.last_name')}
                      className="w-full bg-white rounded-xl py-4 px-6 outline-none shadow-[0_5px_15px_rgba(0,0,0,0.02)] focus:ring-2 focus:ring-primary/10 transition-all text-sm" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[13px] font-serif text-charcoal font-medium ml-1">{t('contact_page.form.labels.email')}</label>
                    <input 
                      type="email" 
                      placeholder={t('contact_page.form.placeholders.email')}
                      className="w-full bg-white rounded-xl py-4 px-6 outline-none shadow-[0_5px_15px_rgba(0,0,0,0.02)] focus:ring-2 focus:ring-primary/10 transition-all text-sm" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[13px] font-serif text-charcoal font-medium ml-1">{t('contact_page.form.labels.phone')}</label>
                    <input 
                      type="text" 
                      placeholder={t('contact_page.form.placeholders.phone')}
                      className="w-full bg-white rounded-xl py-4 px-6 outline-none shadow-[0_5px_15px_rgba(0,0,0,0.02)] focus:ring-2 focus:ring-primary/10 transition-all text-sm" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[13px] font-serif text-charcoal font-medium ml-1">{t('contact_page.form.labels.message')}</label>
                  <textarea 
                    placeholder={t('contact_page.form.placeholders.message')}
                    rows={4} 
                    className="w-full bg-white rounded-xl py-4 px-6 outline-none shadow-[0_5px_15px_rgba(0,0,0,0.02)] focus:ring-2 focus:ring-primary/10 transition-all text-sm resize-none" 
                  />
                </div>

                <button className="px-10 py-4 bg-[#D4E95F] text-charcoal rounded-full font-bold text-sm shadow-md hover:brightness-105 active:scale-95 transition-all">
                  {t('contact_page.form.submit')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Info Boxes Section */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-12 rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-50 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-[#209797] rounded-full flex items-center justify-center text-white mb-8 shadow-lg">
              <Phone size={24} />
            </div>
            <h4 className="text-2xl font-serif text-charcoal mb-4">{t('contact_page.info.contact.title')}</h4>
            <div className="space-y-1 text-charcoal/60 text-sm">
              <p>{t('contact_page.info.contact.phone_1')}: +1 (234) 567–8910</p>
              <p>{t('contact_page.info.contact.phone_2')}: +1 (234) 109–8765</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-12 rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-50 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-[#209797] rounded-full flex items-center justify-center text-white mb-8 shadow-lg">
              <MapPin size={24} />
            </div>
            <h4 className="text-2xl font-serif text-charcoal mb-4">{t('contact_page.info.location.title')}</h4>
            <div className="space-y-1 text-charcoal/60 text-sm">
              <p>Golden Tower – 789 Oak St, Smalltown, TX</p>
              <p>23456, United States</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-12 rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-50 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-[#209797] rounded-full flex items-center justify-center text-white mb-8 shadow-lg">
              <Mail size={24} />
            </div>
            <h4 className="text-2xl font-serif text-charcoal mb-4">{t('contact_page.info.mail.title')}</h4>
            <div className="space-y-1 text-charcoal/60 text-sm">
              <p>hello@cutisure.com</p>
              <p>info@cutisure.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[600px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105759.50854497676!2d-118.4719277!3d34.068921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd973d7d!2sBeverly%20Hills%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}

