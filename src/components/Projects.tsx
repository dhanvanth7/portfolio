import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiExternalLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

interface Project {
  title: string;
  subtitle: string;
  description: string[];
  tech: string[];
  github: string;
  demo: string;
  gradient: string;
  icon: string;
}

const projects: Project[] = [
  {
    title: 'AI Mentor',
    subtitle: 'AI-Powered Interview Preparation Platform',
    description: [
      'Designed and developed a web-based platform to help students prepare for technical interviews.',
      'Implemented personalized learning roadmaps based on users\' existing skills and target job roles.',
      'Built modules for Skill Gap Analysis, Daily Learning Schedule, Mock Interview Planning, and Company-specific interview preparation.',
    ],
    tech: ['HTML', 'CSS', 'Java', 'SQL', 'AI Tools'],
    github: 'https://github.com/dhanvanth/ai-mentor',
    demo: '#',
    gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    icon: '🤖',
  },
  {
    title: 'BIS SmartAssist',
    subtitle: 'Smart India Hackathon Project',
    description: [
      'An AI assistant layered over India\'s Bureau of Standards (BIS) services for seamless standards compliance.',
      'Users describe a product in natural language — the system identifies relevant BIS standards, explains them simply, and builds a step-by-step compliance action plan.',
      'Reviews uploaded documents for preliminary compliance checks, always citing sources. Multilingual support for English, Hindi, and Telugu.',
    ],
    tech: ['React', 'TypeScript', 'Tailwind', 'Java 21', 'Spring Boot', 'LangChain4j', 'PostgreSQL', 'pgvector', 'Docker'],
    github: 'https://github.com/dhanvanth/bis-smartassist',
    demo: '#',
    gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
    icon: '🏛️',
  },
];

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" className="relative z-10">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.2 }}
              className="glass-card rounded-2xl overflow-hidden group"
            >
              {/* Gradient header bar */}
              <div
                className="h-1.5 transition-all duration-500 group-hover:h-2"
                style={{ background: project.gradient }}
              />

              <div className="p-6 md:p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                    style={{
                      background: project.gradient,
                      boxShadow: `0 8px 30px ${project.gradient.includes('#6366f1') ? 'rgba(99,102,241,0.3)' : 'rgba(6,182,212,0.3)'}`,
                    }}
                  >
                    {project.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Title & subtitle */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                      <h3 className="text-xl md:text-2xl font-bold text-white">{project.title}</h3>
                      <span
                        className="text-xs font-medium px-3 py-1 rounded-full w-fit"
                        style={{
                          background: 'rgba(99, 102, 241, 0.1)',
                          color: 'var(--color-accent-start)',
                          border: '1px solid rgba(99, 102, 241, 0.2)',
                        }}
                      >
                        {project.subtitle}
                      </span>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-6">
                      {project.description.map((point, idx) => (
                        <li
                          key={idx}
                          className="text-sm leading-relaxed flex items-start gap-3"
                          style={{ color: 'var(--color-dark-200)' }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                            style={{ background: 'var(--color-accent-start)' }}
                          />
                          {point}
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span key={t} className="tech-tag">{t}</span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium transition-colors duration-300 hover:text-white"
                        style={{ color: 'var(--color-dark-200)' }}
                      >
                        <FaGithub size={18} />
                        Source Code
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium transition-colors duration-300"
                        style={{ color: 'var(--color-accent-start)' }}
                      >
                        <HiExternalLink size={18} />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
