import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const galleryItems = [
  { title: "HydraFacial Glow", category: "Results", img: "https://images.unsplash.com/photo-1570172619380-2826dc09159d?auto=format&fit=crop&q=80&w=600&h=800" },
  { title: "Acne Clearing", category: "Before & After", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=600&h=800" },
  { title: "Laser Precision", category: "Clinical", img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?auto=format&fit=crop&q=80&w=600&h=800" },
  { title: "Anti-Aging Result", category: "Transformation", img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=600&h=800" },
  { title: "Lip Filler Glow", category: "Results", img: "https://images.unsplash.com/photo-1512496011961-aa0e434dc439?auto=format&fit=crop&q=80&w=600&h=800" },
  { title: "Skin Resurfacing", category: "Transformation", img: "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?auto=format&fit=crop&q=80&w=600&h=800" },
];

export function Gallery() {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-20">
          <div className="text-primary font-bold uppercase tracking-widest text-sm">Visual Evidence</div>
          <h1 className="text-5xl md:text-6xl font-serif">Cutisure <span className="text-primary italic">Transformations</span></h1>
          <p className="text-charcoal/60 max-w-2xl mx-auto">
            Witness the real clinical results of our treatments. High-precision care delivering visible changes.
          </p>
        </div>

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
