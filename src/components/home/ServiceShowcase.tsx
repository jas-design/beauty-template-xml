import { motion } from 'motion/react';
import { Syringe, User, Scissors, HeartPulse, Maximize2, MoveUp, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function ServiceShowcase() {
  const { t } = useTranslation();

  const leftServices = [
    { 
      title: t('services_preview.service_list.face'), 
      icon: User, 
      desc: t('services_preview.service_desc')
    },
    { 
      title: t('services_preview.service_list.filler'), 
      icon: Syringe, 
      desc: t('services_preview.service_desc')
    },
    { 
      title: t('services_preview.service_list.plastic'), 
      icon: Scissors, 
      desc: t('services_preview.service_desc')
    }
  ];

  const rightServices = [
    { 
      title: t('services_preview.service_list.body'), 
      icon: HeartPulse, 
      desc: t('services_preview.service_desc')
    },
    { 
      title: t('services_preview.service_list.breast'), 
      icon: Maximize2, 
      desc: t('services_preview.service_desc')
    },
    { 
      title: t('services_preview.service_list.lip'), 
      icon: MoveUp, 
      desc: t('services_preview.service_desc')
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center space-y-4 mb-20">
          <div className="text-[#2D999B] font-bold uppercase tracking-[0.3em] text-[10px]">{t('services_preview.badge')}</div>
          <h2 className="text-[52px] font-serif text-[#1A1A1A] leading-tight mt-2">{t('services_preview.title')}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
            {t('services_preview.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
           {/* Left Column */}
           <div className="space-y-16">
              {leftServices.map((s) => (
                <div key={s.title} className="flex flex-col items-center lg:items-end text-center lg:text-right group">
                  <div className="mb-6 text-[#209797]">
                    <div className="relative">
                       <s.icon size={48} strokeWidth={1} />
                       {/* Decorative dots/lines around icon */}
                       <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full border border-current opacity-40" />
                       <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 rounded-full bg-current opacity-20" />
                    </div>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#1A1A1A] mb-3">{s.title}</h3>
                  <p className="text-[13px] text-gray-400 leading-relaxed max-w-[280px]">
                    {s.desc}
                  </p>
                </div>
              ))}
           </div>

           {/* Center Image */}
           <div className="relative flex justify-center py-10 lg:py-0">
              {/* Background Illustration */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.08] pointer-events-none scale-125">
                 <svg viewBox="0 0 500 500" className="w-[500px] h-[500px] text-[#2D999B]" fill="none" stroke="currentColor" strokeWidth="0.5">
                    <path d="M250,50 Q280,150 200,250 T250,450" />
                    <path d="M200,80 Q250,180 150,280 S250,380 200,420" />
                    <circle cx="250" cy="250" r="100" />
                    <path d="M150,250 L350,250" />
                    <path d="M250,150 L250,350" />
                    {/* Leaf shapes */}
                    <path d="M250,250 c30,-30 60,-30 90,0 c-30,30 -60,30 -90,0" />
                    <path d="M250,250 c-30,-30 -60,-30 -90,0 c30,30 60,30 90,0" />
                 </svg>
              </div>
              
              <div className="relative z-10 w-full max-w-[450px]">
                 <img 
                  src="https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?auto=format&fit=crop&q=80&w=1000" 
                  className="w-full h-auto object-contain select-none pointer-events-none mix-blend-multiply" 
                  alt="Beauty Treatment Model" 
                 />
              </div>
           </div>

           {/* Right Column */}
           <div className="space-y-16">
              {rightServices.map((s) => (
                <div key={s.title} className="flex flex-col items-center lg:items-start text-center lg:text-left group">
                  <div className="mb-6 text-[#209797]">
                    <div className="relative">
                       <s.icon size={48} strokeWidth={1} />
                       <div className="absolute -top-1 -left-1 w-2 h-2 rounded-full border border-current opacity-40" />
                       <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 rounded-full bg-current opacity-20" />
                    </div>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#1A1A1A] mb-3">{s.title}</h3>
                  <p className="text-[13px] text-gray-400 leading-relaxed max-w-[280px]">
                    {s.desc}
                  </p>
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
}
