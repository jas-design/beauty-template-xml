import { motion } from 'motion/react';
import { Flower2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function ExpertBanner() {
  const { t } = useTranslation();
  return (
    <section className="relative py-40 overflow-hidden flex items-center justify-center min-h-[500px]">
      <div className="absolute inset-0">
         <img 
           src="https://images.unsplash.com/photo-1570172619383-2940af3386d1?auto=format&fit=crop&q=80&w=1800" 
           className="w-full h-full object-cover" 
           alt="Skincare treatment"
         />
         <div className="absolute inset-0 bg-[#209797]/70 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white space-y-8">
         <motion.div 
           initial={{ opacity: 0, scale: 0.8 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="flex justify-center"
         >
            <Flower2 size={64} className="text-[#A5E1E1]" strokeWidth={1} />
         </motion.div>
         
         <motion.h2 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.1 }}
           className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] font-medium"
         >
            {t('expert_banner.title')}
         </motion.h2>

         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="space-y-1"
         >
            <p className="text-sm md:text-base font-light tracking-wide text-white/90">
               {t('expert_banner.desc_1')}
            </p>
            <p className="text-sm md:text-base font-light tracking-wide text-white/90">
               {t('expert_banner.desc_2')}
            </p>
         </motion.div>

         <motion.div 
           initial={{ opacity: 0, scaleX: 0 }}
           whileInView={{ opacity: 1, scaleX: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.3 }}
           className="w-16 h-[2.5px] bg-[#D4E95F] mx-auto mt-12"
         />
      </div>
    </section>
  );
}
