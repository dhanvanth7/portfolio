import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SiLeetcode, SiCodechef, SiHackerrank, SiGeeksforgeeks } from 'react-icons/si';
import { HiArrowNarrowRight } from 'react-icons/hi';

interface Profile {
  name: string;
  icon: React.ReactNode;
  url: string;
  color: string;
  username: string;
  stat: string;
}

const profiles: Profile[] = [
  {
    name: 'LeetCode',
    icon: <SiLeetcode size={28} />,
    url: 'https://leetcode.com/dhanvanth',
    color: '#fbbf24',
    username: 'dhanvanth',
    stat: 'Active Problem Solver',
  },
  {
    name: 'CodeChef',
    icon: <SiCodechef size={28} />,
    url: 'https://codechef.com/users/dhanvanth',
    color: '#34d399',
    username: 'dhanvanth',
    stat: 'Competitive Coder',
  },
  {
    name: 'HackerRank',
    icon: <SiHackerrank size={28} />,
    url: 'https://hackerrank.com/dhanvanth',
    color: '#10b981',
    username: 'dhanvanth',
    stat: 'SQL & Java Certified',
  },
  {
    name: 'GeeksforGeeks',
    icon: <SiGeeksforgeeks size={28} />,
    url: 'https://geeksforgeeks.org/user/dhanvanth',
    color: '#4ade80',
    username: 'dhanvanth',
    stat: 'DSA Practice',
  },
];

const CodingProfiles = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="profiles" className="relative z-10 py-10 md:py-16">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs md:text-sm font-mono tracking-widest text-emerald-400 uppercase">Competitive Programming</span>
          </div>
          <h2 className="section-heading">
            Coding <span className="gradient-text">Profiles</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 md:gap-8">
          {profiles.map((profile, i) => (
            <motion.a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
              className="glass-card rounded-3xl p-8 sm:p-9 md:p-11 flex flex-col items-center justify-between text-center group border border-white/10 overflow-hidden"
            >
              <div className="flex flex-col items-center w-full">
                {/* Brand icon container with ample breathing room */}
                <div
                  className="w-18 h-18 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-200 group-hover:scale-105 shadow-lg"
                  style={{
                    width: '4.75rem',
                    height: '4.75rem',
                    background: `${profile.color}15`,
                    color: profile.color,
                    border: `1px solid ${profile.color}35`,
                  }}
                >
                  {profile.icon}
                </div>

                <h3 className="font-extrabold text-white text-lg md:text-xl mb-2 group-hover:text-emerald-300 transition-colors break-words">
                  {profile.name}
                </h3>
                <p className="text-xs md:text-sm font-mono text-slate-400 mb-6 break-words">
                  @{profile.username}
                </p>
              </div>

              <div className="w-full pt-5 border-t border-white/10 flex flex-col items-center gap-4">
                <span
                  className="text-xs md:text-sm font-semibold px-4 py-2 rounded-full w-full break-words"
                  style={{
                    background: `${profile.color}12`,
                    color: profile.color,
                    border: `1px solid ${profile.color}25`,
                  }}
                >
                  {profile.stat}
                </span>

                <span className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-slate-400 group-hover:text-white transition-colors">
                  View Profile <HiArrowNarrowRight className="transition-transform group-hover:translate-x-1 text-emerald-400" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
