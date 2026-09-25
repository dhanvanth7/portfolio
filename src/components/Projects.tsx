import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiExternalLink } from 'react-icons/hi';
import { FaGithub, FaCheckCircle, FaProjectDiagram } from 'react-icons/fa';

interface Project {
  title: string;
  badge: string;
  badgeColor: string;
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
    badge: 'Interview Prep Platform',
    badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    subtitle: 'Personalized AI-Powered Career Coaching & Technical Mock System',
    description: [
      'Designed and engineered a full-stack platform to streamline technical interview preparation for engineering students.',
      'Constructed automated personalized learning roadmaps adapting dynamically to user skill proficiencies and target roles.',
      'Implemented dedicated modules for Skill Gap Analysis, Daily Practice Schedules, Mock Interview Simulation, and Company-Specific Prep.',
    ],
    tech: ['HTML5', 'CSS3', 'Java', 'SQL', 'Prompt Engineering', 'AI APIs'],
    github: 'https://github.com/dhanvanth/ai-mentor',
    demo: '#',
    gradient: 'linear-gradient(135deg, #10b981, #059669)',
    icon: '🤖',
  },
  {
    title: 'BIS SmartAssist',
    badge: 'Smart India Hackathon',
    badgeColor: 'text-teal-400 bg-teal-500/10 border-teal-500/30',
    subtitle: 'Intelligent Standards Compliance & Verification Assistant',
    description: [
      'Architected an intelligent assistant layered on the Bureau of Indian Standards (BIS) regulatory framework for seamless compliance checking.',
      'Enables natural language product descriptions to automatically discover relevant BIS regulations, plain-language summaries, and step-by-step compliance workflows.',
      'Includes document upload analysis for preliminary audits with strict source citations and multilingual support across English, Hindi, and Telugu.',
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Java 21', 'Spring Boot', 'LangChain4j', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/dhanvanth/bis-smartassist',
    demo: '#',
    gradient: 'linear-gradient(135deg, #14b8a6, #0284c7)',
    icon: '🏛️',
  },
];

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" className="relative z-10 py-6 md:py-10">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs md:text-sm font-mono tracking-widest text-emerald-400 uppercase">Portfolio Showcase</span>
          </div>
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="space-y-10 md:space-y-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
              className="glass-card rounded-3xl overflow-hidden group border border-white/10"
            >
              {/* Gradient accent top bar */}
              <div
                className="h-2 transition-all duration-500 group-hover:h-2.5"
                style={{ background: project.gradient }}
              />

              <div className="p-8 md:p-11 lg:p-14">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  {/* Project Emblem */}
                  <div
                    className="w-18 h-18 rounded-2xl flex items-center justify-center text-3xl shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-xl"
                    style={{
                      width: '4.5rem',
                      height: '4.5rem',
                      background: project.gradient,
                    }}
                  >
                    {project.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Header Row: Title & Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                      <div className="flex flex-wrap items-center gap-3.5">
                        <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                          {project.title}
                        </h3>
                        <span
                          className={`text-xs md:text-sm font-semibold px-3.5 py-1.5 rounded-full border ${project.badgeColor}`}
                        >
                          {project.badge}
                        </span>
                      </div>
                    </div>

                    <p className="text-base md:text-lg font-medium text-slate-300 mb-6">
                      {project.subtitle}
                    </p>

                    {/* Bullet descriptions with generous line spacing */}
                    <div className="space-y-3.5 mb-8">
                      {project.description.map((point, idx) => (
                        <div
                          key={idx}
                          className="text-sm md:text-base leading-relaxed text-slate-300 flex items-start gap-3.5"
                        >
                          <FaCheckCircle
                            size={16}
                            className="mt-1 shrink-0 text-emerald-400"
                          />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="pt-6 border-t border-white/10 mb-8">
                      <p className="text-xs md:text-sm font-mono uppercase tracking-wider text-slate-400 mb-3.5 flex items-center gap-2">
                        <FaProjectDiagram size={14} className="text-emerald-400" /> Technologies & Tools
                      </p>
                      <div className="flex flex-wrap gap-2.5">
                        {project.tech.map((t) => (
                          <span key={t} className="tech-tag text-xs md:text-sm px-3.5 py-1.5">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200 hover:text-white hover:border-emerald-500/40"
                      >
                        <FaGithub size={18} />
                        Source Code
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-emerald-600/30 hover:bg-emerald-600/50 border border-emerald-500/40 transition-all duration-200"
                      >
                        <HiExternalLink size={18} className="text-emerald-300" />
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
