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
}

const certifications: Certification[] = [
  {
    name: 'Java Foundations',
    issuer: 'Oracle',
    icon: <FaAward size={22} />,
    color: '#F80000',
  },
  {
    name: 'C Essentials 1',
    issuer: 'Cisco',
    icon: <SiCisco size={22} />,
    color: '#1BA0D7',
  },
  {
    name: 'C Essentials 2',
    issuer: 'Cisco',
    icon: <SiCisco size={22} />,
    color: '#1BA0D7',
  },
  {
    name: 'HTML and CSS',
    issuer: 'Cisco',
    icon: <SiCisco size={22} />,
    color: '#1BA0D7',
  },
  {
    name: 'SQL (Basic)',
    issuer: 'HackerRank',
    icon: <FaCode size={22} />,
    color: '#00EA64',
  },
];

const Certifications = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="certifications" className="relative z-10">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-heading">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="cert-badge group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `${cert.color}15`,
                  color: cert.color,
                }}
              >
                {cert.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-white truncate">{cert.name}</p>
                  <HiCheckCircle
                    size={16}
                    className="shrink-0 transition-colors duration-300"
                    style={{ color: 'var(--color-accent-start)' }}
                  />
                </div>
                <p className="text-xs mt-0.5" style={{ color: 'var(--color-dark-300)' }}>
                  {cert.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
