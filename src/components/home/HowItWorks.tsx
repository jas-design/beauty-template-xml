import { MessagesSquare, Search, Pill, HeartPulse } from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
  { 
    step: "01", 
    title: "Consultation", 
    icon: MessagesSquare,
    desc: "Fermentum quam a sapien at iaculis. Natoque amet hendrerit et turpis aenean."
  },
  { 
    step: "02", 
    title: "Analysis", 
    icon: Search,
    desc: "Fermentum quam a sapien at iaculis. Natoque amet hendrerit et turpis aenean."
  },
  { 
    step: "03", 
    title: "Treatment", 
    icon: Pill,
    desc: "Fermentum quam a sapien at iaculis. Natoque amet hendrerit et turpis aenean.",
    highlight: true
  },
  { 
    step: "04", 
    title: "Ongoing Care", 
    icon: HeartPulse,
    desc: "Fermentum quam a sapien at iaculis. Natoque amet hendrerit et turpis aenean."
  }
];

export function HowItWorks() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-6 mb-24">
          <div className="text-[#2D999B] font-bold uppercase tracking-[0.3em] text-[10px]">HOW IT WORKS</div>
          <h2 className="text-[52px] font-serif text-[#1A1A1A] leading-tight">Treat your skin with the best treatment</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-[16px] leading-relaxed">
            Ultricies auctor aptent imperdiet venenatis volutpat ornare ante enim vel nec facilisis. Ac tempor quisque egestas molestie tortor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {steps.map((s) => (
             <motion.div 
               key={s.step}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: parseInt(s.step) * 0.1 }}
               className={`group rounded-[20px] p-10 shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[420px] transition-all hover:shadow-xl ${s.highlight ? 'bg-[#E3F5F5]' : 'bg-white border border-gray-50'}`}
             >
                {/* Step Badge */}
                <div className="absolute top-0 right-0 bg-[#2D999B] text-white px-4 py-2 text-[11px] font-bold rounded-bl-[10px] tracking-wider z-10">
                   STEP {s.step}
                </div>

                {/* Icon Section */}
                <div className="mb-12">
                   <div className="text-[#2D999B]">
                      <s.icon size={48} strokeWidth={1.2} />
                   </div>
                </div>

                {/* Content Section with Left Border */}
                <div className="space-y-6 border-l-2 border-[#2D999B] pl-6 py-1">
                   <h3 className="text-3xl font-serif font-medium text-[#1A1A1A] leading-tight">{s.title}</h3>
                   <p className="text-[14px] text-gray-500 leading-relaxed font-sans max-w-[200px]">
                      {s.desc}
                   </p>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
