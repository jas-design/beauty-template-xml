import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Instagram, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Contact() {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="text-primary font-bold uppercase tracking-widest text-sm">Contact Us</div>
              <h1 className="text-5xl md:text-6xl font-serif">We'd Love to <span className="text-primary italic">Hear From You</span></h1>
              <p className="text-lg text-charcoal/60 leading-relaxed max-w-xl">
                Ready to start your skin journey? Have questions about our treatments? Our team is here to help you achieve your aesthetic goals.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-mint-light rounded-2xl flex items-center justify-center text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Call Us</h4>
                  <p className="text-charcoal/60">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-mint-light rounded-2xl flex items-center justify-center text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Email Us</h4>
                  <p className="text-charcoal/60">hello@auraclinic.com</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-mint-light rounded-2xl flex items-center justify-center text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Visit Us</h4>
                  <p className="text-charcoal/60">123 Luxury Lane, Suite 400<br />Beverly Hills, CA 90210</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-mint-light rounded-2xl flex items-center justify-center text-primary">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Hours</h4>
                  <p className="text-charcoal/60">Mon-Fri: 9am - 7pm<br />Sat: 10am - 4pm</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-mint-light/50 rounded-[32px] border border-charcoal/5 flex items-center justify-between">
               <div>
                  <h4 className="font-bold mb-1">Follow our journey</h4>
                  <p className="text-sm text-charcoal/60">For daily skin tips and results.</p>
               </div>
               <a href="#" className="flex items-center gap-2 bg-white px-6 py-3 rounded-full font-bold shadow-sm hover:text-primary transition-all">
                  <Instagram size={18} /> @auraclinic
               </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-10 md:p-12 rounded-[40px] shadow-2xl relative"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                     <label className="text-xs font-bold uppercase tracking-widest text-charcoal/40 ml-4">Name</label>
                     <input type="text" placeholder="Your Name" className="w-full bg-white border-2 border-transparent focus:border-primary/20 rounded-3xl py-4 px-6 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs font-bold uppercase tracking-widest text-charcoal/40 ml-4">Email</label>
                     <input type="email" placeholder="email@example.com" className="w-full bg-white border-2 border-transparent focus:border-primary/20 rounded-3xl py-4 px-6 outline-none transition-all" />
                  </div>
               </div>
               <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-charcoal/40 ml-4">Subject</label>
                  <select className="w-full bg-white border-2 border-transparent focus:border-primary/20 rounded-3xl py-4 px-6 outline-none transition-all appearance-none cursor-pointer">
                     <option>General Inquiry</option>
                     <option>Booking Question</option>
                     <option>Membership Plans</option>
                     <option>Careers</option>
                  </select>
               </div>
               <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-charcoal/40 ml-4">Message</label>
                  <textarea placeholder="How can we help you?" rows={6} className="w-full bg-white border-2 border-transparent focus:border-primary/20 rounded-3xl p-6 outline-none transition-all resize-none" />
               </div>
               <button className="w-full py-5 bg-charcoal text-white rounded-full font-bold text-lg hover:bg-primary transition-all flex items-center justify-center gap-3">
                  Send Message <Send size={20} />
               </button>
            </form>

            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 blur-[60px] rounded-full -z-10" />
          </motion.div>
        </div>
      </div>

      <div className="mt-20 h-[500px] w-full grayscale opacity-50 contrast-125 overflow-hidden">
         <iframe
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105759.50854497676!2d-118.4719277!3d34.068921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd973d7d!2sBeverly%20Hills%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
           width="100%"
           height="100%"
           style={{ border: 0 }}
           allowFullScreen={true}
           loading="lazy"
           referrerPolicy="no-referrer-when-downgrade"
         ></iframe>
      </div>
    </div>
  );
}
