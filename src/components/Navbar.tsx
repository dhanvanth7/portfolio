import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Profiles', href: '#profiles' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navItems.map((item) => item.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -90 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'py-4 md:py-5 backdrop-blur-2xl bg-[#08090b]/90 border-b border-white/10 shadow-xl shadow-black/50'
            : 'py-6 md:py-8 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Enhanced Brand Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleClick('#home');
            }}
            className="flex items-center gap-3.5 group"
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center text-emerald-400 font-mono font-extrabold text-base bg-emerald-500/10 border border-emerald-500/30 transition-transform duration-300 group-hover:scale-105 shadow-sm"
            >
              DN
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-white text-base md:text-lg tracking-tight leading-snug group-hover:text-emerald-300 transition-colors">
                Dhanvanth Narla
              </span>
              <span className="text-xs font-mono text-slate-400 leading-none mt-0.5 hidden sm:block">
                Software & AI Developer
              </span>
            </div>
          </a>

          {/* Expanded Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(item.href);
                }}
                className={`nav-link text-sm md:text-[15px] font-medium tracking-wide ${
                  activeSection === item.href.slice(1) ? 'active font-semibold text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleClick('#contact');
              }}
              className="text-sm font-semibold px-5 py-2.5 rounded-xl bg-emerald-500/15 text-emerald-300 border border-emerald-500/35 hover:bg-emerald-500/25 hover:border-emerald-500/60 transition-all duration-200 shadow-sm"
            >
              Let's Connect
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-slate-200 p-2.5 rounded-xl hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 lg:hidden bg-[#08090b]/98 backdrop-blur-3xl flex flex-col justify-center items-center"
          >
            <div className="flex flex-col items-center gap-8 px-6 text-center">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(item.href);
                  }}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className={`text-2xl font-bold tracking-tight transition-colors ${
                    activeSection === item.href.slice(1) ? 'text-emerald-400' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="pt-4">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick('#contact');
                  }}
                  className="inline-block text-base font-semibold px-8 py-3.5 rounded-xl bg-emerald-500 text-slate-950 shadow-lg"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
