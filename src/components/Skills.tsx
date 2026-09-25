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
    categoryIcon: <FaCode className="text-indigo-400" size={16} />,
    skills: [
      { name: 'C', icon: <SiC size={22} />, level: 85, color: '#659ad2' },
      { name: 'C++', icon: <SiCplusplus size={22} />, level: 80, color: '#00599c' },
      { name: 'Java', icon: <FaJava size={22} />, level: 90, color: '#f89820' },
    ],
  },
  {
    title: 'Web Technologies',
    categoryIcon: <FaLayerGroup className="text-cyan-400" size={16} />,
    skills: [
      { name: 'HTML5', icon: <SiHtml5 size={22} />, level: 92, color: '#e34f26' },
      { name: 'CSS3', icon: <SiCss size={22} />, level: 88, color: '#264de4' },
      { name: 'JavaScript', icon: <SiJavascript size={22} />, level: 78, color: '#f7df1e' },
    ],
  },
  {
    title: 'Database & Storage',
    categoryIcon: <FaDatabase className="text-emerald-400" size={16} />,
    skills: [
      { name: 'SQL', icon: <SiMysql size={24} />, level: 84, color: '#00758f' },
      { name: 'Relational Schema', icon: <FaDatabase size={20} />, level: 82, color: '#38bdf8' },
      { name: 'Query Optimization', icon: <FaCode size={20} />, level: 78, color: '#818cf8' },
    ],
  },
  {
    title: 'Tools & Platforms',
    categoryIcon: <FaTools className="text-purple-400" size={16} />,
    skills: [
      { name: 'Git', icon: <SiGit size={22} />, level: 86, color: '#f05032' },
      { name: 'GitHub', icon: <SiGithub size={22} />, level: 90, color: '#e2e8f0' },
      { name: 'VS Code', icon: <VscCode size={22} />, level: 92, color: '#007acc' },
    ],
  },
];

const softSkills = [
  { name: 'Problem Solving', icon: <HiLightBulb className="text-amber-400" size={16} /> },
  { name: 'Team Collaboration', icon: <HiUserGroup className="text-indigo-400" size={16} /> },
  { name: 'Adaptability & Agility', icon: <HiLightningBolt className="text-cyan-400" size={16} /> },
  { name: 'Technical Communication', icon: <HiChatAlt2 className="text-emerald-400" size={16} /> },
  { name: 'Analytical Thinking', icon: <HiSparkles className="text-purple-400" size={16} /> },
];

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="relative z-10">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">Capabilities</span>
          </div>
          <h2 className="section-heading">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* 4 Categories Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + catIdx * 0.1 }}
              className="glass-card rounded-2xl p-6 md:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/5 border border-white/10">
                      {category.categoryIcon}
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-white">
                      {category.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-slate-400 px-2.5 py-1 rounded-full bg-slate-800/80 border border-slate-700/50">
                    {category.skills.length} skills
                  </span>
                </div>

                <div className="space-y-5">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -15 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + catIdx * 0.1 + skillIdx * 0.08 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-110"
                            style={{
                              background: `${skill.color}15`,
                              color: skill.color,
                              border: `1px solid ${skill.color}30`,
                            }}
                          >
                            {skill.icon}
                          </div>
                          <span className="font-semibold text-slate-100 text-sm">{skill.name}</span>
                        </div>
                        <span className="text-xs font-mono font-semibold text-slate-300">
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

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8"
        >
          <div className="glass-card rounded-2xl p-6 md:p-7">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <HiSparkles size={16} />
                </div>
                <h3 className="text-base md:text-lg font-bold text-white">
                  Professional & Soft Skills
                </h3>
              </div>
              <span className="text-xs text-slate-400 font-medium">
                Collaboration & Methodologies
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              {softSkills.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs md:text-sm font-medium transition-all duration-300 hover:scale-105 hover:border-indigo-500/40 cursor-default bg-slate-900/60 border border-slate-700/60 text-slate-200"
                >
                  {item.icon}
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
