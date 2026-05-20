import { motion } from 'motion/react';
import { ArrowRight, Microscope, Target, Heart, Award, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import interiorImg from '../assets/images/clinic_interior_1779219942247.png';
import { useTranslation } from 'react-i18next';

export function About() {
  const { t } = useTranslation();
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
                {t('about_page.hero.title_1')} <span className="italic text-[#1F8D92]">{t('about_page.hero.title_2')}</span> {t('about_page.hero.title_3')}
              </h1>
              <p className="text-charcoal/70 font-sans text-sm md:text-base leading-relaxed max-w-xl">
                {t('about_page.hero.description')}
              </p>
            </div>
            
            <div className="bg-[#1F8D92] rounded-full px-6 py-3 md:px-8 md:py-4 flex items-center gap-3 text-white text-[11px] sm:text-[12px] font-sans font-bold uppercase tracking-[0.15em] shadow-[0_4px_20px_rgba(31,141,146,0.15)] select-none animate-fade-in shrink-0">
              <span className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer">{t('contact_page.hero.breadcrumb.home')}</span>
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#D4E95F] text-[#1F8D92] shrink-0">
                <ChevronRight size={11} className="stroke-[3.5]" />
              </span>
              <span className="text-[#D4E95F]">{t('nav.about')}</span>
            </div>
          </div>
        </section>
      </div>

      {/* Story Details Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="text-primary font-bold uppercase tracking-widest text-sm">{t('about_page.hero.badge')}</div>
            <h2 className="text-3xl md:text-4xl font-serif leading-tight text-charcoal">
              Redefining Clinical Aesthetics
            </h2>
            <p className="text-base text-charcoal/60 leading-relaxed max-w-xl">
              At Cutisure, every service is expertly backed by board-certified specialists, with fully personalized treatment paths using premium-grade, clinical skincare lines.
            </p>
            <div className="flex -space-x-3">
               {[1, 2, 3, 4].map(i => (
                 <img
                   key={i}
                   src={`https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&q=80&w=100&h=100`}
                   className="w-14 h-14 rounded-full border-4 border-white object-cover"
                   alt="Team Member"
                 />
               ))}
               <div className="w-14 h-14 rounded-full border-4 border-white bg-mint-light flex items-center justify-center text-xs font-bold text-primary">
                 +12
               </div>
            </div>
            <p className="text-sm font-bold text-charcoal/40 uppercase tracking-widest">{t('about_page.hero.team_label')}</p>
          </div>
          <div className="relative">
             <div className="relative rounded-[40px] overflow-hidden aspect-square shadow-xl z-10">
               <img
                 src={interiorImg}
                 alt="Cutisure Clinic"
                 className="w-full h-full object-cover"
               />
             </div>

             <div className="absolute -bottom-6 -left-6 glass p-8 rounded-[32px] shadow-xl z-20">
                <div className="text-4xl font-serif text-primary font-bold">12+</div>
                <p className="text-sm font-bold uppercase tracking-widest text-[#1F8D92]">{t('about_page.hero.years')}</p>
             </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-mint-light">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: t('about_page.values.innovation.title'), icon: Microscope, desc: t('about_page.values.innovation.desc') },
                { title: t('about_page.values.precision.title'), icon: Target, desc: t('about_page.values.precision.desc') },
                { title: t('about_page.values.care.title'), icon: Heart, desc: t('about_page.values.care.desc') },
                { title: t('about_page.values.excellence.title'), icon: Award, desc: t('about_page.values.excellence.desc') }
              ].map((value, idx) => (
                <div key={value.title} className="bg-white p-10 rounded-[40px] space-y-6 shadow-sm hover:shadow-xl transition-all duration-500">
                   <div className="w-14 h-14 bg-mint-light rounded-2xl flex items-center justify-center text-primary">
                      <value.icon size={28} />
                   </div>
                   <h3 className="text-2xl font-serif">{value.title}</h3>
                   <p className="text-charcoal/60 text-sm leading-relaxed">{value.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center space-y-4 mb-20">
              <div className="text-primary font-bold uppercase tracking-widest text-sm">{t('about_page.team.badge')}</div>
              <h2 className="text-4xl md:text-5xl font-serif">{t('about_page.team.title')}</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { name: "Dr. Elena Rossi", role: t('about_page.team.roles.director'), img: "https://images.unsplash.com/photo-1559839734-2b71f1e3c770?auto=format&fit=crop&q=80&w=400&h=500" },
                { name: "Julianne Thorne", role: t('about_page.team.roles.esthetician'), img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400&h=500" },
                { name: "Marcus Sterling", role: t('about_page.team.roles.specialist'), img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=500" }
              ].map((member, idx) => (
                <motion.div
                  key={member.name}
                  whileHover={{ y: -10 }}
                  className="space-y-6 group"
                >
                  <div className="rounded-[40px] overflow-hidden aspect-[4/5] shadow-xl">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  </div>
                  <div className="text-center">
                    <h4 className="text-2xl font-serif">{member.name}</h4>
                    <p className="text-sm font-bold uppercase tracking-widest text-primary mt-1">{member.role}</p>
                  </div>
                </motion.div>
              ))}
           </div>

           <div className="mt-24 text-center">
              <Link to="/book" className="inline-flex items-center gap-3 text-lg font-bold group">
                {t('about_page.team.cta')}
                <span className="p-3 rounded-full border border-charcoal/10 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all">
                  <ArrowRight size={20} />
                </span>
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
}
