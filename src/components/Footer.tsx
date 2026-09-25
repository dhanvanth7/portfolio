import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative z-10 py-8 px-6"
      style={{
        borderTop: '1px solid rgba(99, 102, 241, 0.08)',
        background: 'rgba(3, 7, 18, 0.6)',
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm flex items-center gap-1.5" style={{ color: 'var(--color-dark-300)' }}>
          © {currentYear} Dhanvanth Narla. Built with{' '}
          <FaHeart size={12} style={{ color: 'var(--color-accent-start)' }} />{' '}
          and React.
        </p>
        <div className="flex items-center gap-6">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-xs font-medium transition-colors duration-300 hover:text-white"
              style={{ color: 'var(--color-dark-300)' }}
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
