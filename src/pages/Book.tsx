import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, User, CheckCircle2, ChevronRight, ChevronLeft, Droplet, Zap, Sparkles, Waves } from 'lucide-react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addDays } from 'date-fns';
import { cn } from '../lib/utils';
import { useTranslation } from 'react-i18next';

const treatments = [
  { id: '1', title: 'HydraFacial Elite', duration: '60 min', price: '$199', icon: Droplet },
  { id: '2', title: 'Laser Hair Removal', duration: '45 min', price: '$150', icon: Zap },
  { id: '3', title: 'Botox & Fillers', duration: '30 min', price: '$350+', icon: Sparkles },
  { id: '4', title: 'Chemical Peel', duration: '45 min', price: '$175', icon: Waves },
];

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
];

export function Book() {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);
  const [selectedTreatment, setSelectedTreatment] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  const isConfirmed = step === 4;

  return (
    <div className="flex flex-col min-h-screen bg-mint-light/10">
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
                Book Your <span className="italic text-[#1F8D92]">Cutisure Experience</span>
              </h1>
              <p className="text-charcoal/70 font-sans text-sm md:text-base leading-relaxed max-w-xl">
                Follow the steps below to secure your clinical treatment or consultation with our specialists.
              </p>
            </div>
            
            <div className="bg-[#1F8D92] rounded-full px-6 py-3 md:px-8 md:py-4 flex items-center gap-3 text-white text-[11px] sm:text-[12px] font-sans font-bold uppercase tracking-[0.15em] shadow-[0_4px_20px_rgba(31,141,146,0.15)] select-none shrink-0">
              <span className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer">{t('contact_page.hero.breadcrumb.home')}</span>
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#D4E95F] text-[#1F8D92] shrink-0">
                <ChevronRight size={11} className="stroke-[3.5]" />
              </span>
              <span className="text-[#D4E95F]">Book Online</span>
            </div>
          </div>
        </section>
      </div>

      {/* Book Content */}
      <div className="flex-1 py-12 px-6 max-w-4xl mx-auto w-full">

        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-12 max-w-md mx-auto relative px-4">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -z-10 -translate-y-1/2" />
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500",
                step >= i ? "bg-primary text-white" : "bg-white text-charcoal/40 border border-gray-100"
              )}
            >
              {step > i ? <CheckCircle2 size={18} /> : i}
            </div>
          ))}
        </div>

        <div className="glass rounded-[40px] shadow-2xl overflow-hidden p-8 md:p-12">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="space-y-2">
                  <h2 className="text-2xl font-serif">Select Treatment</h2>
                  <p className="text-sm text-charcoal/40 font-medium uppercase tracking-widest">Step 1 of 3</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {treatments.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setSelectedTreatment(t.id)}
                      className={cn(
                        "p-6 rounded-3xl border-2 text-left transition-all flex items-center gap-6 group hover:shadow-lg",
                        selectedTreatment === t.id ? "border-primary bg-primary/5" : "border-gray-50 bg-white"
                      )}
                    >
                       <div className={cn(
                         "w-14 h-14 rounded-2xl flex items-center justify-center transition-colors",
                         selectedTreatment === t.id ? "bg-primary text-white" : "bg-gray-50 text-primary group-hover:bg-primary group-hover:text-white"
                       )}>
                         <t.icon size={28} />
                       </div>
                       <div>
                         <div className="font-bold text-lg">{t.title}</div>
                         <div className="text-sm text-charcoal/40 font-medium uppercase tracking-widest">{t.duration} • {t.price}</div>
                       </div>
                    </button>
                  ))}
                </div>
                <button
                  disabled={!selectedTreatment}
                  onClick={handleNext}
                  className="w-full py-5 bg-primary text-white rounded-full font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                >
                  Confirm Treatment <ChevronRight size={20} />
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="space-y-2">
                  <button onClick={handlePrev} className="text-sm font-bold text-charcoal/40 hover:text-primary flex items-center gap-1 mb-2">
                    <ChevronLeft size={16} /> Back
                  </button>
                  <h2 className="text-2xl font-serif">Choose Date & Time</h2>
                  <p className="text-sm text-charcoal/40 font-medium uppercase tracking-widest">Step 2 of 3</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Calendar Mock */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-lg">{format(currentMonth, 'MMMM yyyy')}</span>
                      <div className="flex gap-2">
                        <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))} className="p-2 hover:bg-gray-100 rounded-full"><ChevronLeft size={18} /></button>
                        <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))} className="p-2 hover:bg-gray-100 rounded-full"><ChevronRight size={18} /></button>
                      </div>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-center text-xs font-bold text-charcoal/40 uppercase tracking-widest mb-2">
                      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => <div key={d}>{d}</div>)}
                    </div>
                    <div className="grid grid-cols-7 gap-1">
                      {daysInMonth.map((day, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedDate(day)}
                          className={cn(
                            "aspect-square rounded-xl flex items-center justify-center text-sm font-medium transition-all",
                            isSameDay(day, selectedDate) ? "bg-primary text-white shadow-xl shadow-primary/30" : "hover:bg-gray-50",
                            !isSameMonth(day, currentMonth) ? "opacity-20 pointer-events-none" : ""
                          )}
                        >
                          {format(day, 'd')}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Slots */}
                  <div className="space-y-4">
                    <h3 className="font-bold">Available Slots - {format(selectedDate, 'MMM d')}</h3>
                    <div className="grid grid-cols-2 gap-3">
                       {timeSlots.map(time => (
                         <button
                           key={time}
                           onClick={() => setSelectedTime(time)}
                           className={cn(
                             "py-4 rounded-2xl border transition-all text-sm font-bold flex items-center justify-center gap-2",
                             selectedTime === time ? "border-primary bg-primary text-white" : "border-gray-100 hover:border-primary/50"
                           )}
                         >
                           <Clock size={16} /> {time}
                         </button>
                       ))}
                    </div>
                  </div>
                </div>

                <button
                  disabled={!selectedTime}
                  onClick={handleNext}
                  className="w-full py-5 bg-primary text-white rounded-full font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                >
                  Continue to Personal Info <ChevronRight size={20} />
                </button>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="space-y-2">
                  <button onClick={handlePrev} className="text-sm font-bold text-charcoal/40 hover:text-primary flex items-center gap-1 mb-2">
                    <ChevronLeft size={16} /> Back
                  </button>
                  <h2 className="text-2xl font-serif">Client Information</h2>
                  <p className="text-sm text-charcoal/40 font-medium uppercase tracking-widest">Step 3 of 3</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-charcoal/40 ml-4">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-6 top-1/2 -translate-y-1/2 text-charcoal/20" size={18} />
                      <input type="text" placeholder="Sarah Johnson" className="w-full bg-gray-50 border-none rounded-3xl py-4 pl-14 pr-6 focus:ring-2 focus:ring-primary/20 transition-all outline-none" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-charcoal/40 ml-4">Email Address</label>
                    <div className="relative">
                      <User className="absolute left-6 top-1/2 -translate-y-1/2 text-charcoal/20" size={18} />
                      <input type="email" placeholder="sarah@example.com" className="w-full bg-gray-50 border-none rounded-3xl py-4 pl-14 pr-6 focus:ring-2 focus:ring-primary/20 transition-all outline-none" />
                    </div>
                  </div>
                  <div className="space-y-2 lg:col-span-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-charcoal/40 ml-4">Special Requests (Optional)</label>
                    <textarea placeholder="Tell us about your skin concerns..." rows={4} className="w-full bg-gray-50 border-none rounded-3xl p-6 focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none" />
                  </div>
                </div>

                <div className="p-6 bg-primary/5 rounded-3xl border border-primary/10 flex items-start gap-4">
                  <CheckCircle2 size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-bold mb-1 text-primary">Cutisure Privacy Guarantee</h4>
                    <p className="text-sm text-charcoal/60 leading-relaxed">
                      Your appointment is protected. We will confirm your slot via email within 1 hour. No payment is required until after your treatment at the clinic.
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleNext}
                  className="w-full py-5 bg-primary text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-primary/30 transition-all flex items-center justify-center gap-2"
                >
                  Finalize Booking
                </button>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-8 py-10"
              >
                <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-primary/30">
                  <CheckCircle2 size={48} />
                </div>
                <div className="space-y-4">
                  <h2 className="text-4xl font-serif">Booking Confirmed!</h2>
                  <p className="text-lg text-charcoal/60 max-w-md mx-auto">
                    We've received your request for <strong>{treatments.find(t => t.id === selectedTreatment)?.title}</strong> on <strong>{format(selectedDate, 'MMMM d')} at {selectedTime}</strong>.
                  </p>
                </div>
                <div className="p-8 border border-gray-100 rounded-[32px] max-w-sm mx-auto space-y-4 text-sm font-medium">
                   <div className="flex justify-between items-center pb-4 border-b border-gray-50">
                     <span className="text-charcoal/40 uppercase tracking-widest">Confirmation ID</span>
                     <span className="font-bold">#CUTI-9821-X</span>
                   </div>
                   <p className="text-charcoal/40">Check your inbox for a confirmation email and clinical intake forms.</p>
                </div>
                <button
                   onClick={() => setStep(1)}
                   className="text-primary font-bold hover:underline"
                >
                   Book Another Treatment
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
