import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const galleryItems = [
  { title: "HydraFacial Glow", category: "Results", img: "https://images.unsplash.com/photo-1570172619380-2826dc09159d?auto=format&fit=crop&q=80&w=600&h=800" },
  { title: "Acne Clearing", category: "Before & After", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=600&h=800" },
  { title: "Laser Precision", category: "Clinical", img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?auto=format&fit=crop&q=80&w=600&h=800" },
  { title: "Anti-Aging Result", category: "Transformation", img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=600&h=800" },
  { title: "Lip Filler Glow", category: "Results", img: "https://images.unsplash.com/photo-1512496011961-aa0e434dc439?auto=format&fit=crop&q=80&w=600&h=800" },
  { title: "Skin Resurfacing", category: "Transformation", img: "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?auto=format&fit=crop&q=80&w=600&h=800" },
];

export function Gallery() {
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
                Cutisure <span className="italic text-[#1F8D92]">Transformations</span>
              </h1>
              <p className="text-charcoal/70 font-sans text-sm md:text-base leading-relaxed max-w-xl">
                Witness the real clinical results of our treatments. High-precision care delivering visible changes.
              </p>
            </div>
            
            <div className="bg-[#1F8D92] rounded-full px-6 py-3 md:px-8 md:py-4 flex items-center gap-3 text-white text-[11px] sm:text-[12px] font-sans font-bold uppercase tracking-[0.15em] shadow-[0_4px_20px_rgba(31,141,146,0.15)] select-none shrink-0">
              <span className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer">{t('contact_page.hero.breadcrumb.home')}</span>
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#D4E95F] text-[#1F8D92] shrink-0">
                <ChevronRight size={11} className="stroke-[3.5]" />
              </span>
              <span className="text-[#D4E95F]">Gallery</span>
            </div>
          </div>
        </section>
      </div>

      {/* Gallery Content */}
      <div className="flex-1 py-12 px-6 max-w-7xl mx-auto w-full">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group rounded-[40px] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                 <div className="space-y-2">
                    <span className="px-3 py-1 bg-accent text-charcoal text-[10px] font-bold uppercase tracking-widest rounded-full">{item.category}</span>
                    <h3 className="text-white text-2xl font-serif">{item.title}</h3>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-mint-light rounded-[40px] text-center space-y-8">
           <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto text-primary shadow-sm">
              <Sparkles size={32} />
           </div>
           <h2 className="text-3xl font-serif">Ready for your transformation?</h2>
           <p className="text-charcoal/60 max-w-xl mx-auto">
             Every journey starts with a conversation. Let's build your personalized treatment plan today.
           </p>
           <Link to="/book" className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-charcoal transition-all">
              Book Appointment <ArrowRight size={20} />
           </Link>
        </div>
      </div>
    </div>
  );
}
