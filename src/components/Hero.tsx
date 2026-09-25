import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { HiDownload, HiMail } from 'react-icons/hi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="section-container relative z-10 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
          style={{
            background: 'rgba(99, 102, 241, 0.1)',
            border: '1px solid rgba(99, 102, 241, 0.2)',
          }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm font-medium" style={{ color: 'var(--color-dark-200)' }}>
            Open to opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6"
        >
          <span className="text-white">Hi, I'm </span>
          <span className="gradient-text">Dhanvanth</span>
        </motion.h1>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl font-light mb-10 h-8"
          style={{ color: 'var(--color-dark-200)' }}
        >
          <TypeAnimation
            sequence={[
              'AI/ML Student',
              2000,
              'Full Stack Developer',
              2000,
              'Building Intelligent Systems',
              2000,
              'Problem Solver',
              2000,
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
            cursor={true}
            style={{ display: 'inline-block' }}
          />
        </motion.div>

        {/* Bio line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="max-w-2xl mx-auto text-base sm:text-lg mb-12 leading-relaxed"
          style={{ color: 'var(--color-dark-300)' }}
        >
          B.Tech AI & ML student crafting innovative solutions at the intersection of
          artificial intelligence and modern web development.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="glow-btn px-8 py-3.5 rounded-xl text-white font-semibold text-sm flex items-center gap-2"
          >
            <HiMail size={18} />
            Get In Touch
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="outline-btn px-8 py-3.5 rounded-xl font-semibold text-sm flex items-center gap-2"
          >
            <HiDownload size={18} />
            Download Resume
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { icon: <FaGithub size={20} />, href: 'https://github.com/dhanvanth', label: 'GitHub' },
            { icon: <FaLinkedinIn size={20} />, href: 'https://linkedin.com/in/dhanvanth', label: 'LinkedIn' },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{
                background: 'rgba(17, 24, 39, 0.6)',
                border: '1px solid rgba(99, 102, 241, 0.15)',
                color: 'var(--color-dark-200)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.4)';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.background = 'rgba(99, 102, 241, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.15)';
                e.currentTarget.style.color = 'var(--color-dark-200)';
                e.currentTarget.style.background = 'rgba(17, 24, 39, 0.6)';
              }}
            >
              {social.icon}
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 rounded-full flex justify-center pt-2"
            style={{ border: '2px solid var(--color-dark-500)' }}
          >
            <motion.div
              animate={{ opacity: [0.2, 1, 0.2], height: [4, 8, 4] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 rounded-full"
              style={{ background: 'var(--color-accent-start)' }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
