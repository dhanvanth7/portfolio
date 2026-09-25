import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
      className="loader-wrapper"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Animated logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-20 h-20 rounded-2xl flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, var(--color-accent-start), var(--color-accent-end))',
          }}
        >
          <span className="text-3xl font-extrabold text-white">DN</span>
        </motion.div>

        {/* Loading bar */}
        <div className="w-48 h-1 rounded-full overflow-hidden" style={{ background: 'var(--color-dark-700)' }}>
          <motion.div
            className="h-full rounded-full"
            style={{
              background: 'linear-gradient(90deg, var(--color-accent-start), var(--color-accent-end))',
            }}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          />
        </div>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-sm font-medium"
          style={{ color: 'var(--color-dark-300)' }}
        >
          Loading portfolio...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loader;
