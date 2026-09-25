import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  SiC, SiCplusplus, SiJavascript, SiHtml5, SiCss, SiGit, SiGithub,
  SiMysql,
} from 'react-icons/si';
import { FaJava, FaLayerGroup, FaTools, FaDatabase, FaCode } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';
import { HiLightningBolt, HiUserGroup, HiSparkles, HiChatAlt2, HiLightBulb } from 'react-icons/hi';

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
  color: string;
}

interface SkillCategory {
  title: string;
  categoryIcon: React.ReactNode;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    categoryIcon: <FaCode className="text-emerald-400" size={16} />,
    skills: [
      { name: 'C', icon: <SiC size={18} />, level: 85, color: '#659ad2' },
      { name: 'C++', icon: <SiCplusplus size={18} />, level: 80, color: '#00599c' },
      { name: 'Java', icon: <FaJava size={18} />, level: 90, color: '#f89820' },
    ],
  },
  {
    title: 'Web Technologies',
    categoryIcon: <FaLayerGroup className="text-teal-400" size={16} />,
    skills: [
      { name: 'HTML5', icon: <SiHtml5 size={18} />, level: 92, color: '#e34f26' },
      { name: 'CSS3', icon: <SiCss size={18} />, level: 88, color: '#264de4' },
      { name: 'JavaScript', icon: <SiJavascript size={18} />, level: 78, color: '#f7df1e' },
    ],
  },
  {
    title: 'Database & Storage',
    categoryIcon: <FaDatabase className="text-emerald-400" size={16} />,
    skills: [
      { name: 'SQL', icon: <SiMysql size={19} />, level: 84, color: '#00758f' },
      { name: 'Relational Schema', icon: <FaDatabase size={16} />, level: 82, color: '#38bdf8' },
      { name: 'Query Optimization', icon: <FaCode size={16} />, level: 78, color: '#34d399' },
    ],
  },
  {
    title: 'Tools & Platforms',
    categoryIcon: <FaTools className="text-amber-400" size={16} />,
    skills: [
      { name: 'Git', icon: <SiGit size={18} />, level: 86, color: '#f05032' },
      { name: 'GitHub', icon: <SiGithub size={18} />, level: 90, color: '#e2e8f0' },
      { name: 'VS Code', icon: <VscCode size={18} />, level: 92, color: '#007acc' },
    ],
  },
];

const softSkills = [
  { name: 'Problem Solving', icon: <HiLightBulb className="text-amber-400" size={18} /> },
  { name: 'Team Collaboration', icon: <HiUserGroup className="text-emerald-400" size={18} /> },
  { name: 'Adaptability & Agility', icon: <HiLightningBolt className="text-teal-400" size={18} /> },
  { name: 'Technical Communication', icon: <HiChatAlt2 className="text-emerald-400" size={18} /> },
  { name: 'Analytical Thinking', icon: <HiSparkles className="text-amber-400" size={18} /> },
];

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="relative z-10 py-6 md:py-10">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs md:text-sm font-mono tracking-widest text-emerald-400 uppercase">Capabilities</span>
          </div>
          <h2 className="section-heading">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* 4 Categories Grid with Spacious Padding */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + catIdx * 0.1 }}
              className="glass-card rounded-3xl p-8 md:p-10 lg:p-11 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-5 mb-8 border-b border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 shrink-0">
                      {category.categoryIcon}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white">
                      {category.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-slate-400 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-white/10">
                    {category.skills.length} skills
                  </span>
                </div>

                <div className="space-y-7">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -15 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + catIdx * 0.1 + skillIdx * 0.08 }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-4">
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                            style={{
                              background: `${skill.color}18`,
                              color: skill.color,
                              border: `1px solid ${skill.color}35`,
                            }}
                          >
                            {skill.icon}
                          </div>
                          <span className="font-semibold text-slate-100 text-base">{skill.name}</span>
                        </div>
                        <span className="text-xs md:text-sm font-mono font-semibold text-slate-300">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="skill-bar-bg h-2 rounded-full">
                        <motion.div
                          className="skill-bar-fill rounded-full"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 1.2,
                            delay: 0.4 + catIdx * 0.1 + skillIdx * 0.08,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10"
        >
          <div className="glass-card rounded-3xl p-8 md:p-10 lg:p-11">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-7 pb-5 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                  <HiSparkles size={18} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white">
                  Professional & Soft Skills
                </h3>
              </div>
              <span className="text-xs md:text-sm text-slate-400 font-medium font-mono">
                Team Collaboration & Methodology
              </span>
            </div>

            <div className="flex flex-wrap gap-4">
              {softSkills.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-3 px-5 py-3.5 rounded-2xl text-sm font-medium transition-all duration-200 hover:border-emerald-500/40 cursor-default bg-slate-900/70 border border-white/10 text-slate-200"
                >
                  <span className="shrink-0">{item.icon}</span>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
