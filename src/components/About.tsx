import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiAcademicCap, HiLocationMarker, HiCode } from 'react-icons/hi';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const stats = [
    { value: '8.41', label: 'CGPA', icon: <HiAcademicCap size={24} /> },
    { value: '3rd', label: 'Year B.Tech', icon: <HiCode size={24} /> },
    { value: 'AP', label: 'Andhra Pradesh', icon: <HiLocationMarker size={24} /> },
  ];

  return (
    <section id="about" className="relative z-10">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-heading">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Bio text */}
          <motion.div
            className="lg:col-span-3 space-y-6"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-lg leading-relaxed" style={{ color: 'var(--color-dark-200)' }}>
              I'm a <span className="text-white font-semibold">3rd-year B.Tech student</span> specializing
              in <span className="gradient-text font-semibold">Artificial Intelligence & Machine Learning</span> at{' '}
              <span className="text-white font-semibold">Aditya College of Engineering and Technology</span>.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-dark-300)' }}>
              Motivated and detail-oriented with a strong foundation in programming, problem solving,
              and web development. Passionate about Software Development, Artificial Intelligence,
              and Full Stack Development. Seeking internship and Software Engineer opportunities to
              apply my technical skills while continuously learning modern technologies.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-dark-300)' }}>
              I regularly practice competitive programming and have participated in the college event{' '}
              <span className="text-white font-medium">Project Space</span>, a one-week project
              development program focused on innovation and teamwork. I'm always eager to tackle
              challenging problems and build meaningful solutions.
            </p>

            {/* Quick info tags */}
            <div className="flex flex-wrap gap-3 pt-2">
              {['AI/ML', 'Full Stack', 'Problem Solver', 'Team Player', 'Quick Learner'].map((tag) => (
                <span key={tag} className="tech-tag">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stats cards */}
          <motion.div
            className="lg:col-span-2 grid gap-4"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="glass-card rounded-xl p-6 flex items-center gap-5"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: 'rgba(99, 102, 241, 0.1)',
                    color: 'var(--color-accent-start)',
                  }}
                >
                  {stat.icon}
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm" style={{ color: 'var(--color-dark-300)' }}>
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Education card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="glass-card rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <HiAcademicCap size={20} style={{ color: 'var(--color-accent-start)' }} />
                <span className="font-semibold text-white text-sm">Education</span>
              </div>
              <p className="text-sm font-medium text-white">Aditya College of Engineering & Technology</p>
              <p className="text-xs mt-1" style={{ color: 'var(--color-dark-300)' }}>
                B.Tech AI & ML • 2024 – 2028
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
