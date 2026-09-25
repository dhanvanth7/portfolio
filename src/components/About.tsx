import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiAcademicCap, HiLocationMarker, HiCode, HiSparkles } from 'react-icons/hi';
import { FaGraduationCap } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  const stats = [
    { value: '8.41', label: 'Academic CGPA', icon: <HiAcademicCap size={20} /> },
    { value: 'AI & ML', label: 'Engineering Specialization', icon: <HiCode size={20} /> },
    { value: 'Andhra Pradesh', label: 'Based in India', icon: <HiLocationMarker size={20} /> },
  ];

  return (
    <section id="about" className="relative z-10 py-6 md:py-10">
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
            className="lg:col-span-7 glass-card rounded-3xl p-8 md:p-10 lg:p-12 flex flex-col justify-between"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6 md:space-y-7">
              <p className="text-lg md:text-xl font-normal leading-relaxed text-slate-100">
                I'm a <span className="text-white font-semibold underline decoration-emerald-500/50 decoration-2 underline-offset-4">Computer Science student</span> specializing
                in <span className="gradient-text font-semibold">Artificial Intelligence & Machine Learning</span> at{' '}
                <span className="text-white font-semibold">Aditya College of Engineering and Technology</span>.
              </p>

              <p className="text-base md:text-[17px] leading-relaxed text-slate-300">
                Motivated and detail-oriented with a solid grounding in software development, data structures, and full-stack web engineering. Passionate about designing robust architectures, clean APIs, and implementing intelligent machine learning models.
              </p>

              <p className="text-base md:text-[17px] leading-relaxed text-slate-300">
                I regularly practice algorithmic problem solving and participated in the college innovation program{' '}
                <span className="text-emerald-300 font-medium">Project Space</span>. Looking forward to software engineering and AI internship opportunities to contribute and build impactful software.
              </p>
            </div>

            {/* Core Competencies Tags */}
            <div className="pt-8 border-t border-white/10 mt-8">
              <p className="text-xs md:text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2 font-mono">
                <HiSparkles className="text-emerald-400" size={16} /> Core Competencies
              </p>
              <div className="flex flex-wrap gap-3">
                {['Artificial Intelligence', 'Machine Learning', 'Full-Stack Web Dev', 'Algorithmic Problem Solving', 'Database Design'].map((tag) => (
                  <span key={tag} className="tech-tag text-xs md:text-sm px-4 py-1.5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Spacious Stats & Education column */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-between gap-5"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Stat cards grid */}
            <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-5">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="glass-card rounded-2xl p-6 md:p-7 flex items-center gap-5"
                >
                  <div
                    className="w-13 h-13 rounded-2xl flex items-center justify-center shrink-0 text-emerald-400 bg-emerald-500/10 border border-emerald-500/20"
                    style={{ width: '3.25rem', height: '3.25rem' }}
                  >
                    {stat.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">{stat.value}</div>
                    <div className="text-xs md:text-sm font-medium text-slate-400 mt-0.5">
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
              className="glass-card rounded-2xl p-7 md:p-8 border-emerald-500/20 space-y-4"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                    <FaGraduationCap size={18} />
                  </div>
                  <span className="font-bold text-white text-base">Formal Education</span>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Enrolled
                </span>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-bold text-white leading-snug">
                  Aditya College of Engineering & Technology
                </h4>
                <p className="text-sm text-emerald-300 font-medium mt-1.5">
                  B.Tech — Artificial Intelligence & Machine Learning
                </p>
              </div>

              <div className="flex items-center justify-between text-xs md:text-sm text-slate-400 pt-4 border-t border-white/10">
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
