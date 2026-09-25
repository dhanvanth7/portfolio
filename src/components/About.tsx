import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiAcademicCap, HiLocationMarker, HiCode, HiSparkles } from 'react-icons/hi';
import { FaGraduationCap } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  const stats = [
    { value: '8.41', label: 'Academic CGPA', icon: <HiAcademicCap size={18} /> },
    { value: 'AI & ML', label: 'Engineering Specialization', icon: <HiCode size={18} /> },
    { value: 'Andhra Pradesh', label: 'Based in India', icon: <HiLocationMarker size={18} /> },
  ];

  return (
    <section id="about" className="relative z-10">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase">Background & Focus</span>
          </div>
          <h2 className="section-heading">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Bio text container */}
          <motion.div
            className="lg:col-span-7 glass-card rounded-2xl p-7 md:p-9 flex flex-col justify-between"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-5">
              <p className="text-lg md:text-xl font-normal leading-relaxed text-slate-100">
                I'm a <span className="text-white font-semibold underline decoration-emerald-500/50 decoration-2 underline-offset-4">Computer Science student</span> specializing
                in <span className="gradient-text font-semibold">Artificial Intelligence & Machine Learning</span> at{' '}
                <span className="text-white font-semibold">Aditya College of Engineering and Technology</span>.
              </p>

              <p className="text-sm md:text-base leading-relaxed text-slate-300">
                Motivated and detail-oriented with a solid grounding in software development, data structures, and full-stack web engineering. Passionate about designing robust architectures, clean APIs, and implementing intelligent machine learning models.
              </p>

              <p className="text-sm md:text-base leading-relaxed text-slate-300">
                I regularly practice algorithmic problem solving and participated in the college innovation program{' '}
                <span className="text-emerald-300 font-medium">Project Space</span>. Looking forward to software engineering and AI internship opportunities to contribute and build impactful software.
              </p>
            </div>

            {/* Core Focus tags */}
            <div className="pt-6 border-t border-white/5 mt-6">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5 font-mono">
                <HiSparkles className="text-emerald-400" size={14} /> Core Competencies
              </p>
              <div className="flex flex-wrap gap-2.5">
                {['Artificial Intelligence', 'Machine Learning', 'Full-Stack Web Dev', 'Algorithmic Problem Solving', 'Database Design'].map((tag) => (
                  <span key={tag} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats & Education column */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-between gap-4"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Stat cards grid */}
            <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="glass-card rounded-xl p-5 flex items-center gap-4"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 text-emerald-400 bg-emerald-500/10 border border-emerald-500/20"
                  >
                    {stat.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xl md:text-2xl font-bold text-white tracking-tight">{stat.value}</div>
                    <div className="text-xs font-medium text-slate-400">
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
              className="glass-card rounded-xl p-6 border-emerald-500/20"
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                    <FaGraduationCap size={15} />
                  </div>
                  <span className="font-semibold text-white text-sm">Formal Education</span>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Enrolled
                </span>
              </div>

              <h4 className="text-sm md:text-base font-semibold text-white leading-snug">
                Aditya College of Engineering & Technology
              </h4>
              <p className="text-xs text-emerald-300 font-medium mt-1">
                B.Tech — Artificial Intelligence & Machine Learning
              </p>
              <div className="flex items-center justify-between text-xs text-slate-400 mt-4 pt-3 border-t border-white/5">
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
