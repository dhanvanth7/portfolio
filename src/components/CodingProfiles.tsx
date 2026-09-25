import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SiLeetcode, SiCodechef, SiHackerrank, SiGeeksforgeeks } from 'react-icons/si';

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
    icon: <SiLeetcode size={32} />,
    url: 'https://leetcode.com/dhanvanth',
    color: '#FFA116',
    username: 'dhanvanth',
    stat: 'Problem Solver',
  },
  {
    name: 'CodeChef',
    icon: <SiCodechef size={32} />,
    url: 'https://codechef.com/users/dhanvanth',
    color: '#5B4638',
    username: 'dhanvanth',
    stat: 'Competitive Coder',
  },
  {
    name: 'HackerRank',
    icon: <SiHackerrank size={32} />,
    url: 'https://hackerrank.com/dhanvanth',
    color: '#00EA64',
    username: 'dhanvanth',
    stat: 'SQL Certified',
  },
  {
    name: 'GeeksforGeeks',
    icon: <SiGeeksforgeeks size={32} />,
    url: 'https://geeksforgeeks.org/user/dhanvanth',
    color: '#2F8D46',
    username: 'dhanvanth',
    stat: 'DSA Enthusiast',
  },
];

const CodingProfiles = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="profiles" className="relative z-10">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-heading">
            Coding <span className="gradient-text">Profiles</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {profiles.map((profile, i) => (
            <motion.a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="profile-card group"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-400 group-hover:scale-110 group-hover:rotate-3"
                style={{
                  background: `${profile.color}15`,
                  color: profile.color,
                  boxShadow: `0 0 0px ${profile.color}00`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 30px ${profile.color}30`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 0px ${profile.color}00`;
                }}
              >
                {profile.icon}
              </div>
              <h3 className="font-bold text-white text-sm">{profile.name}</h3>
              <p className="text-xs" style={{ color: 'var(--color-dark-300)' }}>
                @{profile.username}
              </p>
              <span
                className="text-xs font-medium px-3 py-1 rounded-full"
                style={{
                  background: `${profile.color}10`,
                  color: profile.color,
                  border: `1px solid ${profile.color}25`,
                }}
              >
                {profile.stat}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
