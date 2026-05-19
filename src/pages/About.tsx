import { motion } from 'motion/react';
import { ArrowRight, Microscope, Target, Heart, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import interiorImg from '../assets/images/clinic_interior_1779219942247.png';

export function About() {
  return (
    <div className="pt-32 bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="px-6 mb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="text-primary font-bold uppercase tracking-widest text-sm">Our Story</div>
            <h1 className="text-5xl md:text-6xl font-serif leading-tight">
              Redefining <span className="text-primary italic">Clinical Excellence</span> In Beauty
            </h1>
            <p className="text-lg text-charcoal/60 leading-relaxed max-w-xl">
              Founded in 2012, Cutisure Beauty Clinic was born from a simple vision: to bridge the gap between clinical dermatology and a luxury spa experience.
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
            <p className="text-sm font-bold text-charcoal/40 uppercase tracking-widest">Meet our award-winning team of 15+ specialists</p>
          </div>
          <div className="relative">
             <div className="relative rounded-[40px] overflow-hidden aspect-square shadow-2xl z-10">
               <img
                 src={interiorImg}
                 alt="Cutisure Clinic"
                 className="w-full h-full object-cover"
               />
             </div>

             <div className="absolute -bottom-10 -left-10 glass p-10 rounded-[32px] shadow-2xl z-20">
                <div className="text-5xl font-serif text-primary font-bold">12+</div>
                <p className="text-sm font-bold uppercase tracking-widest text-charcoal/40">Years of History</p>
             </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-mint-light">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Innovation", icon: Microscope, desc: "We invest in the latest FDA-approved technology to ensure the best clinical outcomes." },
                { title: "Precision", icon: Target, desc: "Every skin is unique. Our treatments are highly personalized to your specific cellular needs." },
                { title: "Care", icon: Heart, desc: "We prioritize patient safety and comfort above all else, creating a sanctuary for your skin." },
                { title: "Excellence", icon: Award, desc: "Our specialists are continuously trained in the most advanced aesthetic techniques." }
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
              <div className="text-primary font-bold uppercase tracking-widest text-sm">Expertise You Can Trust</div>
              <h2 className="text-4xl md:text-5xl font-serif">Meet the Specialists</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { name: "Dr. Elena Rossi", role: "Medical Director", img: "https://images.unsplash.com/photo-1559839734-2b71f1e3c770?auto=format&fit=crop&q=80&w=400&h=500" },
                { name: "Julianne Thorne", role: "Elite Esthetician", img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400&h=500" },
                { name: "Marcus Sterling", role: "Laser Specialist", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=500" }
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
                Join our skin community
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
