import { FaHeart, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SiLeetcode, SiGmail } from 'react-icons/si';
import { HiArrowUp } from 'react-icons/hi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Profiles', href: '#profiles' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#08090b]/95 backdrop-blur-2xl pt-16 pb-12 px-6 md:px-12 lg:px-16 mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Top Expanded Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 pb-14 border-b border-white/10 items-start">
          
          {/* Brand & Summary */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-emerald-400 font-mono font-extrabold text-base bg-emerald-500/10 border border-emerald-500/30">
                DN
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">Dhanvanth Narla</h3>
                <p className="text-xs font-mono text-emerald-400">Software & AI Developer</p>
              </div>
            </div>
            <p className="text-sm md:text-base text-slate-400 max-w-md leading-relaxed">
              Passionate B.Tech student specializing in Artificial Intelligence & Machine Learning. Building scalable full-stack applications and data-driven systems.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300 font-bold">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links & Back to top */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300 font-bold">
              Connect & Code
            </h4>
            <div className="flex items-center gap-3 pt-1">
              {[
                { icon: <FaGithub size={16} />, href: 'https://github.com/dhanvanth', label: 'GitHub' },
                { icon: <FaLinkedinIn size={16} />, href: 'https://linkedin.com/in/dhanvanth', label: 'LinkedIn' },
                { icon: <SiLeetcode size={16} />, href: 'https://leetcode.com/dhanvanth', label: 'LeetCode' },
                { icon: <SiGmail size={16} />, href: 'mailto:dhanvanth.narla@gmail.com', label: 'Email' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 text-slate-300 hover:text-emerald-300 hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all duration-200"
                >
                  {item.icon}
                </a>
              ))}
            </div>
            <div className="pt-3">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <span>Back to top</span>
                <HiArrowUp size={14} className="animate-pulse" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-400 font-normal">
          <p className="flex items-center gap-1.5">
            © {currentYear} Dhanvanth Narla. Crafted with{' '}
            <FaHeart size={13} className="text-emerald-400" />{' '}
            and modern engineering standards.
          </p>
          <p className="font-mono text-slate-400">
            Aditya College of Engineering & Technology
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
