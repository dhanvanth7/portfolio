import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative z-10 py-8 px-6 border-t border-white/5 bg-[#08090b]/90 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs sm:text-sm text-slate-400 flex items-center gap-1.5">
          © {currentYear} Dhanvanth Narla. Crafted with{' '}
          <FaHeart size={12} className="text-emerald-400" />{' '}
          and modern engineering standards.
        </p>
        <div className="flex items-center gap-6">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-xs font-medium text-slate-400 hover:text-emerald-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
