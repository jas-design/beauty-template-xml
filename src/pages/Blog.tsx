import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
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
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="space-y-4">
            <div className="text-primary font-bold uppercase tracking-widest text-sm">{t('blog_page.hero.badge')}</div>
            <h1 className="text-5xl md:text-6xl font-serif">{t('blog_page.hero.title_1')} <span className="text-primary italic">{t('blog_page.hero.title_2')}</span></h1>
            <p className="text-charcoal/60 max-w-xl">
              {t('blog_page.hero.description')}
            </p>
          </div>
          <div className="flex gap-4">
             {[t('blog_page.tabs.all'), t('blog_page.tabs.skincare'), t('blog_page.tabs.treatments'), t('blog_page.tabs.wellness')].map(tab => (
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
