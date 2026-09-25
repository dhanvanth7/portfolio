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
    badgeColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
    subtitle: 'Personalized AI-Powered Career Coaching & Technical Mock System',
    description: [
      'Designed and engineered a full-stack platform to streamline technical interview preparation for engineering students.',
      'Constructed automated personalized learning roadmaps adapting dynamically to user skill proficiencies and dream job targets.',
      'Implemented dedicated modules for Skill Gap Analysis, Daily Practice Schedules, Mock Interview Simulation, and Company-Specific Prep.',
    ],
    tech: ['HTML5', 'CSS3', 'Java', 'SQL', 'Prompt Engineering', 'AI APIs'],
    github: 'https://github.com/dhanvanth/ai-mentor',
    demo: '#',
    gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    icon: '🤖',
  },
  {
    title: 'BIS SmartAssist',
    badge: 'Smart India Hackathon',
    badgeColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    subtitle: 'Intelligent Standards Compliance & Verification Assistant',
    description: [
      'Architected an intelligent assistant layered on the Bureau of Indian Standards (BIS) regulatory framework for seamless compliance checking.',
      'Enables natural language product descriptions to automatically discover relevant BIS regulations, plain-language summaries, and step-by-step compliance workflows.',
      'Includes document upload analysis for preliminary audits with strict source citations and multilingual support across English, Hindi, and Telugu.',
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Java 21', 'Spring Boot', 'LangChain4j', 'PostgreSQL', 'Docker'],
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
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-violet-400 uppercase">Portfolio Showcase</span>
          </div>
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
              className="glass-card rounded-2xl overflow-hidden group border border-slate-700/60"
            >
              {/* Gradient accent top bar */}
              <div
                className="h-1.5 transition-all duration-500 group-hover:h-2"
                style={{ background: project.gradient }}
              />

              <div className="p-6 md:p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Project Emblem */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0 transition-transform duration-500 group-hover:scale-110 shadow-lg"
                    style={{
                      background: project.gradient,
                    }}
                  >
                    {project.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Header Row: Title & Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                          {project.title}
                        </h3>
                        <span
                          className={`text-xs font-semibold px-3 py-1 rounded-full border ${project.badgeColor}`}
                        >
                          {project.badge}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm font-medium text-slate-300 mb-5">
                      {project.subtitle}
                    </p>

                    {/* Bullet descriptions */}
                    <div className="space-y-2.5 mb-6">
                      {project.description.map((point, idx) => (
                        <div
                          key={idx}
                          className="text-xs md:text-sm leading-relaxed text-slate-300 flex items-start gap-3"
                        >
                          <FaCheckCircle
                            size={14}
                            className="mt-1 shrink-0 text-indigo-400"
                          />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="pt-4 border-t border-slate-800 mb-6">
                      <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                        <FaProjectDiagram size={12} className="text-indigo-400" /> Technologies & Tools
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span key={t} className="tech-tag">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs md:text-sm font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-all duration-200 hover:text-white hover:border-slate-500"
                      >
                        <FaGithub size={16} />
                        Source Code
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs md:text-sm font-medium text-white bg-indigo-600/30 hover:bg-indigo-600/50 border border-indigo-500/40 transition-all duration-200"
                      >
                        <HiExternalLink size={16} className="text-indigo-300" />
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
