import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
      className="loader-wrapper"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Animated logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-16 h-16 rounded-2xl flex items-center justify-center bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono font-bold text-2xl shadow-lg shadow-emerald-500/10"
        >
          DN
        </motion.div>

        {/* Loading bar */}
        <div className="w-44 h-1 rounded-full overflow-hidden bg-slate-800">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        </div>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-xs font-mono text-slate-400 tracking-wider uppercase"
        >
          Initializing portfolio...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loader;
