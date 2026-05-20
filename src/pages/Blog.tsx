import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function Blog() {
  const { t } = useTranslation();

  const posts = [
    {
      title: t('blog_page.posts.p1.title'),
      excerpt: t('blog_page.posts.p1.excerpt'),
      tag: t('blog_page.tabs.skincare'),
      date: "May 15, 2024",
      author: "Elena Rossi",
      img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=400&h=250"
    },
    {
      title: t('blog_page.posts.p2.title'),
      excerpt: t('blog_page.posts.p2.excerpt'),
      tag: t('blog_page.tabs.ingredients'),
      date: "May 10, 2024",
      author: "Julianne Thorne",
      img: "https://images.unsplash.com/photo-1590156221170-28a1d2e41723?auto=format&fit=crop&q=80&w=400&h=250"
    },
    {
      title: t('blog_page.posts.p3.title'),
      excerpt: t('blog_page.posts.p3.excerpt'),
      tag: t('blog_page.tabs.trends'),
      date: "May 05, 2024",
      author: "Marcus Sterling",
      img: "https://images.unsplash.com/photo-1512496011961-aa0e434dc439?auto=format&fit=crop&q=80&w=400&h=250"
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
                {t('blog_page.hero.title_1')} <span className="italic text-[#1F8D92]">{t('blog_page.hero.title_2')}</span>
              </h1>
              <p className="text-charcoal/70 font-sans text-sm md:text-base leading-relaxed max-w-xl">
                {t('blog_page.hero.description')}
              </p>
            </div>
            
            <div className="bg-[#1F8D92] rounded-full px-6 py-3 md:px-8 md:py-4 flex items-center gap-3 text-white text-[11px] sm:text-[12px] font-sans font-bold uppercase tracking-[0.15em] shadow-[0_4px_20px_rgba(31,141,146,0.15)] select-none shrink-0">
              <span className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer">{t('contact_page.hero.breadcrumb.home')}</span>
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#D4E95F] text-[#1F8D92] shrink-0">
                <ChevronRight size={11} className="stroke-[3.5]" />
              </span>
              <span className="text-[#D4E95F]">{t('nav.blog')}</span>
            </div>
          </div>
        </section>
      </div>

      {/* Blog Content */}
      <div className="flex-1 py-12 px-6 max-w-7xl mx-auto w-full">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
           {[t('blog_page.tabs.all'), t('blog_page.tabs.skincare'), t('blog_page.tabs.treatments'), t('blog_page.tabs.wellness')].map(tab => (
             <button key={tab} className="px-6 py-3 rounded-full border border-gray-100 font-bold text-sm text-charcoal hover:border-[#1F8D92] hover:text-[#1F8D92] transition-colors bg-gray-50/50">
               {tab}
             </button>
           ))}
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
                        <User size={14} className="text-primary" /> {t('blog_page.actions.by')} {post.author}
                     </div>
                     <Link to="#" className="text-sm font-bold underline underline-offset-4 flex items-center gap-2 group/link">
                        {t('blog_page.actions.read_more')} <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                     </Link>
                  </div>
               </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-24 border-t border-gray-100 pt-20">
           <div className="max-w-3xl mx-auto glass p-12 rounded-[40px] text-center space-y-8">
              <h2 className="text-4xl font-serif">{t('blog_page.newsletter.title')}</h2>
              <p className="text-charcoal/60">{t('blog_page.newsletter.desc')}</p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={e => e.preventDefault()}>
                 <input type="email" placeholder={t('blog_page.newsletter.placeholder')} className="flex-grow bg-white border-2 border-transparent focus:border-primary/20 bg-mint-light/50 rounded-full py-4 px-8 outline-none transition-all" />
                 <button className="bg-charcoal text-white px-10 py-4 rounded-full font-bold hover:bg-primary transition-all">
                    {t('blog_page.newsletter.button')}
                 </button>
              </form>
              <p className="text-[10px] text-charcoal/30 font-bold uppercase tracking-widest">{t('blog_page.newsletter.disclaimer')}</p>
           </div>
        </div>
      </div>
    </div>
  );
}
