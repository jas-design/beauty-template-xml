import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Mail, ChevronDown, Sparkle, Sparkles } from 'lucide-react';
import { cn } from '../../lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services', hasDropdown: true },
  { name: 'Blog', href: '/blog', hasDropdown: true },
  { name: 'Pages', href: '#', hasDropdown: true },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 h-24 flex items-center">
      <nav className="max-w-[1600px] mx-auto w-full px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex items-center justify-center">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <Sparkles size={32} className="text-secondary absolute opacity-20" />
              <Sparkle size={24} className="text-primary" fill="currentColor" />
            </div>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-3xl font-serif font-bold tracking-tight text-charcoal">
              Cutisure
            </span>
            <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-gray-400 mt-1">
              PURE DERMA CARE
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                'text-sm font-bold flex items-center gap-1 transition-colors hover:text-primary',
                location.pathname === link.href ? 'text-primary' : 'text-charcoal'
              )}
            >
              {link.name}
              {link.hasDropdown && <ChevronDown size={14} className="opacity-40" />}
            </Link>
          ))}
        </div>

        {/* Contact Info Group */}
        <div className="hidden lg:flex items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
              <Phone size={20} />
            </div>
            <div className="flex flex-col whitespace-nowrap">
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider leading-tight">Customer Support</span>
              <span className="text-sm font-bold text-charcoal leading-tight">+1 (234) 567-8910</span>
            </div>
          </div>
          
          <div className="h-10 w-px bg-gray-200 mx-8" />

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
              <Mail size={20} />
            </div>
            <div className="flex flex-col whitespace-nowrap">
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider leading-tight">Email Support</span>
              <span className="text-sm font-bold text-charcoal leading-tight">hello@cutisure.com</span>
            </div>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-charcoal"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl p-6 lg:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  'text-lg font-medium py-2',
                  location.pathname === link.href ? 'text-primary' : 'text-charcoal/80'
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
