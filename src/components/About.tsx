import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiAcademicCap, HiLocationMarker, HiCode, HiSparkles } from 'react-icons/hi';
import { FaGraduationCap } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  const stats = [
    { value: '8.41', label: 'Academic CGPA', icon: <HiAcademicCap size={22} /> },
    { value: 'AI & ML', label: 'Engineering Specialization', icon: <HiCode size={22} /> },
    { value: 'Andhra Pradesh', label: 'Based in India', icon: <HiLocationMarker size={22} /> },
  ];

  return (
    <section id="about" className="relative z-10 py-10 md:py-16">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs md:text-sm font-mono tracking-widest text-emerald-400 uppercase">Background & Focus</span>
          </div>
          <h2 className="section-heading">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Spacious Bio Card */}
          <motion.div
            className="lg:col-span-7 glass-card rounded-3xl p-8 sm:p-10 md:p-12 lg:p-14 flex flex-col justify-between overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6 md:space-y-8 text-left">
              <p className="text-lg md:text-xl font-normal leading-relaxed text-slate-100 break-words">
                I'm a <span className="text-white font-semibold underline decoration-emerald-500/50 decoration-2 underline-offset-4">Computer Science student</span> specializing
                in <span className="gradient-text font-semibold">Artificial Intelligence & Machine Learning</span> at{' '}
                <span className="text-white font-semibold">Aditya College of Engineering and Technology</span>.
              </p>

              <p className="text-base md:text-[17px] leading-relaxed text-slate-300 break-words">
                Motivated and detail-oriented with a solid grounding in software development, data structures, and full-stack web engineering. Passionate about designing robust architectures, clean APIs, and implementing intelligent machine learning models.
              </p>

              <p className="text-base md:text-[17px] leading-relaxed text-slate-300 break-words">
                I regularly practice algorithmic problem solving and participated in the college innovation program{' '}
                <span className="text-emerald-300 font-medium">Project Space</span>. Looking forward to software engineering and AI internship opportunities to contribute and build impactful software.
              </p>
            </div>

            {/* Core Competencies Tags with spacious margins */}
            <div className="pt-8 border-t border-white/10 mt-8 text-left">
              <p className="text-xs md:text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2 font-mono">
                <HiSparkles className="text-emerald-400" size={16} /> Core Competencies
              </p>
              <div className="flex flex-wrap gap-3">
                {['Artificial Intelligence', 'Machine Learning', 'Full-Stack Web Dev', 'Algorithmic Problem Solving', 'Database Design'].map((tag) => (
                  <span key={tag} className="tech-tag text-xs md:text-sm px-4 py-2">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Spacious Stats & Education column */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-between gap-6"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Stat cards stack */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="glass-card rounded-3xl p-6 sm:p-7 md:p-8 flex items-center gap-5 sm:gap-6 overflow-hidden text-left"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 text-emerald-400 bg-emerald-500/10 border border-emerald-500/20"
                    style={{ width: '3.5rem', height: '3.5rem' }}
                  >
                    {stat.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight break-words">{stat.value}</div>
                    <div className="text-xs sm:text-sm font-medium text-slate-400 mt-1 break-words">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Education card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="glass-card rounded-3xl p-7 sm:p-8 md:p-9 border-emerald-500/20 space-y-5 overflow-hidden text-left"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                    <FaGraduationCap size={20} />
                  </div>
                  <span className="font-bold text-white text-base md:text-lg">Formal Education</span>
                </div>
                <span className="text-xs font-mono px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                  Enrolled
                </span>
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-bold text-white leading-snug break-words">
                  Aditya College of Engineering & Technology
                </h4>
                <p className="text-sm text-emerald-300 font-medium mt-1.5 break-words">
                  B.Tech — Artificial Intelligence & Machine Learning
                </p>
              </div>

              <div className="flex items-center justify-between text-xs md:text-sm text-slate-400 pt-5 border-t border-white/10">
                <span className="font-mono">2024 – 2028</span>
                <span className="font-semibold text-slate-200">CGPA: 8.41</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
