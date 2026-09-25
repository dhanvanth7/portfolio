import { motion } from 'framer-motion';
import { HiDownload, HiMail, HiArrowNarrowDown } from 'react-icons/hi';
import { FaGithub, FaLinkedinIn, FaCode } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* Authentic Real Status Chip */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full mb-6 border border-emerald-500/25 bg-emerald-500/10 text-emerald-300 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono font-medium tracking-wide">
              Available for Software Engineer Roles & Internships
            </span>
          </motion.div>

          {/* Genuine Human Name & Role */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4 text-white"
          >
            Dhanvanth <span className="gradient-text">Narla</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-2xl md:text-3xl font-semibold text-slate-200 mb-6 flex items-center justify-center gap-2"
          >
            <span className="text-emerald-400 font-mono text-sm sm:text-base mr-1">&lt;</span>
            <span>Software Engineer & AI/ML Developer</span>
            <span className="text-emerald-400 font-mono text-sm sm:text-base ml-1">/&gt;</span>
          </motion.div>

          {/* Authentic Developer Bio */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed mb-8 font-normal"
          >
            Passionate about building scalable full-stack applications and engineering intelligent systems. 
            Focused on robust software design, database optimization, and algorithmic problem solving.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-3.5 mb-10 w-full sm:w-auto"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="glow-btn px-6 py-3 rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2"
            >
              <FaCode size={15} />
              Explore Projects
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="outline-btn px-6 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2"
            >
              <HiMail size={16} className="text-emerald-400" />
              Contact Me
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="outline-btn px-6 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2"
            >
              <HiDownload size={16} />
              Resume
            </a>
          </motion.div>

          {/* Real Quick Snapshot Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-full max-w-3xl glass-card rounded-2xl p-4 sm:p-6 border border-white/5 shadow-xl"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
              <div className="p-2 sm:p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">Domain</div>
                <div className="text-xs sm:text-sm font-bold text-white">AI & Full-Stack</div>
              </div>

              <div className="p-2 sm:p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">Academics</div>
                <div className="text-xs sm:text-sm font-bold text-emerald-400">8.41 CGPA</div>
              </div>

              <div className="p-2 sm:p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">Core Tech</div>
                <div className="text-xs sm:text-sm font-bold text-white">Java • SQL • React</div>
              </div>

              <div className="p-2 sm:p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">Location</div>
                <div className="text-xs sm:text-sm font-bold text-white">Andhra Pradesh, IN</div>
              </div>
            </div>

            {/* Quick Links inside Snapshot */}
            <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-3 border-t border-white/5 text-xs text-slate-400">
              <span className="font-mono">Find me online:</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/dhanvanth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white transition-colors"
                >
                  <FaGithub size={13} />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/dhanvanth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white transition-colors"
                >
                  <FaLinkedinIn size={13} className="text-emerald-400" />
                  LinkedIn
                </a>
                <a
                  href="https://leetcode.com/dhanvanth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white transition-colors"
                >
                  <SiLeetcode size={13} className="text-amber-400" />
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
            className="mt-12"
          >
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-emerald-400 transition-colors"
            >
              <span>Scroll to learn more</span>
              <HiArrowNarrowDown className="animate-bounce" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
