import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiCheckCircle } from 'react-icons/hi';
import { SiCisco } from 'react-icons/si';
import { FaCode, FaAward } from 'react-icons/fa';

interface Certification {
  name: string;
  issuer: string;
  icon: React.ReactNode;
  color: string;
  category: string;
}

const certifications: Certification[] = [
  {
    name: 'Java Foundations',
    issuer: 'Oracle Academy',
    icon: <FaAward size={20} />,
    color: '#f87171',
    category: 'Programming',
  },
  {
    name: 'C Essentials 1',
    issuer: 'Cisco Networking Academy',
    icon: <SiCisco size={20} />,
    color: '#38bdf8',
    category: 'Core C',
  },
  {
    name: 'C Essentials 2',
    issuer: 'Cisco Networking Academy',
    icon: <SiCisco size={20} />,
    color: '#38bdf8',
    category: 'Advanced C',
  },
  {
    name: 'HTML & CSS',
    issuer: 'Cisco Networking Academy',
    icon: <SiCisco size={20} />,
    color: '#34d399',
    category: 'Web Dev',
  },
  {
    name: 'SQL (Basic)',
    issuer: 'HackerRank Verified',
    icon: <FaCode size={20} />,
    color: '#10b981',
    category: 'Database',
  },
];

const Certifications = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="certifications" className="relative z-10 py-12 md:py-20">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs md:text-sm font-mono tracking-widest text-emerald-400 uppercase">Validations</span>
          </div>
          <h2 className="section-heading">
            Credentials & <span className="gradient-text">Certifications</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              className="glass-card rounded-lg p-6 sm:p-7 md:p-8 flex items-center justify-between gap-5 group text-left"
            >
              <div className="flex items-center gap-4 min-w-0 flex-1">
                <div
                  className="w-13 h-13 rounded-md flex items-center justify-center shrink-0 transition-transform duration-200"
                  style={{
                    width: '3.25rem',
                    height: '3.25rem',
                    background: `${cert.color}18`,
                    color: cert.color,
                    border: `1px solid ${cert.color}35`,
                  }}
                >
                  {cert.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-bold text-white leading-snug break-words">
                    {cert.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium break-words">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <HiCheckCircle size={18} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
