import { motion } from 'framer-motion';
import { HiDownload, HiMail, HiArrowNarrowDown } from 'react-icons/hi';
import { FaGithub, FaLinkedinIn, FaCode } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden">
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* Authentic Real Status Chip */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8 border border-emerald-500/25 bg-emerald-500/10 text-emerald-300 shadow-sm"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs md:text-sm font-mono font-medium tracking-wide">
              Available for Software Engineer Roles & Internships
            </span>
          </motion.div>

          {/* Genuine Human Name & Role */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight mb-5 text-white"
          >
            Dhanvanth <span className="gradient-text">Narla</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-200 mb-8 flex items-center justify-center gap-2.5"
          >
            <span className="text-emerald-400 font-mono text-base sm:text-lg">&lt;</span>
            <span>Software Engineer & AI/ML Developer</span>
            <span className="text-emerald-400 font-mono text-base sm:text-lg">/&gt;</span>
          </motion.div>

          {/* Authentic Developer Bio */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-10 font-normal"
          >
            Passionate about building scalable full-stack applications and engineering intelligent systems. 
            Focused on robust software design, database optimization, and algorithmic problem solving.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-14 w-full sm:w-auto"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="glow-btn px-8 py-3.5 rounded-xl text-white font-bold text-sm md:text-base flex items-center justify-center gap-2.5 shadow-md"
            >
              <FaCode size={16} />
              Explore Projects
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="outline-btn px-8 py-3.5 rounded-xl font-bold text-sm md:text-base flex items-center justify-center gap-2.5"
            >
              <HiMail size={18} className="text-emerald-400" />
              Contact Me
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="outline-btn px-8 py-3.5 rounded-xl font-bold text-sm md:text-base flex items-center justify-center gap-2.5"
            >
              <HiDownload size={18} />
              Resume
            </a>
          </motion.div>

          {/* Extra-Spacious Developer Snapshot Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-full max-w-4xl glass-card rounded-3xl p-8 sm:p-10 md:p-12 border border-white/10 shadow-2xl"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-7 text-left">
              <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Domain</div>
                <div className="text-sm sm:text-base font-bold text-white">AI & Full-Stack</div>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Academics</div>
                <div className="text-sm sm:text-base font-bold text-emerald-400">8.41 CGPA</div>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Core Tech</div>
                <div className="text-sm sm:text-base font-bold text-white">Java • SQL • React</div>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Location</div>
                <div className="text-sm sm:text-base font-bold text-white">Andhra Pradesh, IN</div>
              </div>
            </div>

            {/* Quick Links inside Snapshot */}
            <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pt-6 border-t border-white/10 text-xs sm:text-sm text-slate-400">
              <span className="font-mono text-slate-400">Direct profiles:</span>
              <div className="flex flex-wrap items-center gap-3.5">
                <a
                  href="https://github.com/dhanvanth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white transition-colors"
                >
                  <FaGithub size={16} />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/dhanvanth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white transition-colors"
                >
                  <FaLinkedinIn size={16} className="text-emerald-400" />
                  LinkedIn
                </a>
                <a
                  href="https://leetcode.com/dhanvanth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white transition-colors"
                >
                  <SiLeetcode size={16} className="text-amber-400" />
                  LeetCode
                </a>
              </div>
            </div>
          </motion.div>

          {/* Scroll Down Hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-14"
          >
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs md:text-sm font-mono text-slate-400 hover:text-emerald-400 transition-colors"
            >
              <span>Scroll to explore</span>
              <HiArrowNarrowDown className="animate-bounce" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
