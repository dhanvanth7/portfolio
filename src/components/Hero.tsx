import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { HiDownload, HiMail } from 'react-icons/hi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99,102,241,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.4) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="section-container relative z-10 text-center flex flex-col items-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 border border-emerald-500/30 bg-emerald-500/10 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs md:text-sm font-semibold text-emerald-300">
            Open to Software Engineer & AI Internships
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 text-white"
        >
          Hi, I'm <span className="gradient-text">Dhanvanth</span>
        </motion.h1>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-lg sm:text-2xl md:text-3xl font-medium mb-6 h-9 flex items-center justify-center text-indigo-300"
        >
          <TypeAnimation
            sequence={[
              'AI & ML Engineer',
              2000,
              'Full-Stack Developer',
              2000,
              'Building Intelligent Systems',
              2000,
              'Competitive Programmer',
              2000,
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
            cursor={true}
            style={{ display: 'inline-block' }}
          />
        </motion.div>

        {/* Bio tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg mb-10 leading-relaxed text-slate-300 font-normal"
        >
          Passionate about engineering elegant software architectures, building full-stack web applications, and leveraging artificial intelligence to solve complex real-world challenges.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full sm:w-auto"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="glow-btn w-full sm:w-auto px-8 py-3.5 rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2"
          >
            <HiMail size={18} />
            Get In Touch
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="outline-btn w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2"
          >
            <HiDownload size={18} />
            Download Resume
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-3"
        >
          {[
            { icon: <FaGithub size={18} />, href: 'https://github.com/dhanvanth', label: 'GitHub' },
            { icon: <FaLinkedinIn size={18} />, href: 'https://linkedin.com/in/dhanvanth', label: 'LinkedIn' },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 glass-card text-slate-300 hover:text-white hover:border-indigo-500/40"
            >
              {social.icon}
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-14"
        >
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            aria-label="Scroll to About section"
            className="inline-block"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-5 h-9 rounded-full flex justify-center pt-1.5 border border-slate-700 bg-slate-900/50"
            >
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3], height: [4, 8, 4] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1 rounded-full bg-indigo-400"
              />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
