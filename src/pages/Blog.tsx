import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const posts = [
  {
    title: "The Ultimate Guide to Pre-Summer Skincare",
    excerpt: "Preparing your skin for the sun starts weeks before your vacation. Learn our clinical tips for a safe glow.",
    tag: "Skincare",
    date: "May 15, 2024",
    author: "Elena Rossi",
    img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=400&h=250"
  },
  {
    title: "Understanding Retinol: Mynd vs. Reality",
    excerpt: "Demystifying one of the most powerful anti-aging ingredients in the world. Is it right for your skin type?",
    tag: "Ingredients",
    date: "May 10, 2024",
    author: "Julianne Thorne",
    img: "https://images.unsplash.com/photo-1590156221170-28a1d2e41723?auto=format&fit=crop&q=80&w=400&h=250"
  },
  {
    title: "What is 'Skin Cycling' and Does It Actually Work?",
    excerpt: "Exploring the viral skincare routine from a clinical perspective. We dive deep into the science of recovery.",
    tag: "Beauty Trends",
    date: "May 05, 2024",
    author: "Marcus Sterling",
    img: "https://images.unsplash.com/photo-1512496011961-aa0e434dc439?auto=format&fit=crop&q=80&w=400&h=250"
  }
];

export function Blog() {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="space-y-4">
            <div className="text-primary font-bold uppercase tracking-widest text-sm">Insider Knowledge</div>
            <h1 className="text-5xl md:text-6xl font-serif">The Cutisure <span className="text-primary italic">Journal</span></h1>
            <p className="text-charcoal/60 max-w-xl">
              Clinical insights, skincare routines, and the latest beauty innovations curated by our expert team.
            </p>
          </div>
          <div className="flex gap-4">
             {["All", "Skincare", "Treatments", "Wellness"].map(tab => (
               <button key={tab} className="px-6 py-3 rounded-full border border-gray-100 font-bold text-sm hover:border-primary hover:text-primary transition-all">
                 {tab}
               </button>
             ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
               <div className="rounded-[40px] overflow-hidden aspect-[16/10] mb-8 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               </div>
               <div className="space-y-4 px-2">
                  <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-primary">
                    <span>{post.tag}</span>
                    <span className="w-1 h-1 bg-charcoal/20 rounded-full" />
                    <span className="text-charcoal/40">{post.date}</span>
                  </div>
                  <h3 className="text-2xl font-serif leading-tight group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-charcoal/60 leading-relaxed line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4">
                     <div className="flex items-center gap-2 text-xs font-bold">
                        <User size={14} className="text-primary" /> By {post.author}
                     </div>
                     <Link to="#" className="text-sm font-bold underline underline-offset-4 flex items-center gap-2 group/link">
                        Read More <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                     </Link>
                  </div>
               </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-24 border-t border-gray-100 pt-20">
           <div className="max-w-3xl mx-auto glass p-12 rounded-[40px] text-center space-y-8">
              <h2 className="text-4xl font-serif">Join our beauty circle</h2>
              <p className="text-charcoal/60">Subscribe to our newsletter for exclusive offers, clinical updates, and skincare tips delivered to your inbox.</p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={e => e.preventDefault()}>
                 <input type="email" placeholder="Your email address" className="flex-grow bg-white border-2 border-transparent focus:border-primary/20 bg-mint-light/50 rounded-full py-4 px-8 outline-none transition-all" />
                 <button className="bg-charcoal text-white px-10 py-4 rounded-full font-bold hover:bg-primary transition-all">
                    Subscribe
                 </button>
              </form>
              <p className="text-[10px] text-charcoal/30 font-bold uppercase tracking-widest">No spam. Just skin science. Unsubscribe anytime.</p>
           </div>
        </div>
      </div>
    </div>
  );
}
