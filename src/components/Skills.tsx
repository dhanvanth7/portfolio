import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  SiC, SiCplusplus, SiJavascript, SiHtml5, SiCss, SiGit, SiGithub,
  SiMysql,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'C', icon: <SiC size={28} />, level: 85, color: '#A8B9CC' },
      { name: 'C++', icon: <SiCplusplus size={28} />, level: 80, color: '#00599C' },
      { name: 'Java', icon: <FaJava size={28} />, level: 90, color: '#ED8B00' },
    ],
  },
  {
    title: 'Web Technologies',
    skills: [
      { name: 'HTML5', icon: <SiHtml5 size={28} />, level: 92, color: '#E34F26' },
      { name: 'CSS3', icon: <SiCss size={28} />, level: 88, color: '#1572B6' },
      { name: 'JavaScript', icon: <SiJavascript size={28} />, level: 75, color: '#F7DF1E' },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'SQL', icon: <SiMysql size={28} />, level: 82, color: '#4479A1' },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', icon: <SiGit size={28} />, level: 85, color: '#F05032' },
      { name: 'GitHub', icon: <SiGithub size={28} />, level: 88, color: '#e5e7eb' },
      { name: 'VS Code', icon: <VscCode size={28} />, level: 92, color: '#007ACC' },
    ],
  },
];

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="relative z-10">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-heading">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + catIdx * 0.15 }}
              className="glass-card rounded-2xl p-6 md:p-8"
            >
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: 'var(--color-accent-start)' }}
                />
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + catIdx * 0.15 + skillIdx * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span style={{ color: skill.color }} className="transition-transform duration-300 hover:scale-125">
                          {skill.icon}
                        </span>
                        <span className="font-medium text-white text-sm">{skill.name}</span>
                      </div>
                      <span
                        className="text-xs font-mono font-medium"
                        style={{ color: 'var(--color-dark-300)' }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar-bg">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1.2,
                          delay: 0.6 + catIdx * 0.15 + skillIdx * 0.1,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-8"
        >
          <div className="glass-card rounded-2xl p-6 md:p-8">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: 'var(--color-accent-end)' }}
              />
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {['Problem Solving', 'Teamwork', 'Adaptability', 'Communication', 'Critical Thinking'].map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 cursor-default"
                  style={{
                    background: 'rgba(99, 102, 241, 0.08)',
                    border: '1px solid rgba(99, 102, 241, 0.15)',
                    color: 'var(--color-dark-100)',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
