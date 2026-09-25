const BackgroundOrbs = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Subtle ambient light top right */}
      <div
        className="absolute -top-40 -right-40 w-[550px] h-[550px] rounded-full opacity-[0.07] blur-[120px]"
        style={{ background: '#10b981' }}
      />

      {/* Subtle ambient light bottom left */}
      <div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-[0.06] blur-[130px]"
        style={{ background: '#14b8a6' }}
      />

      {/* Center ambient warm depth */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full opacity-[0.03] blur-[140px]"
        style={{ background: '#f59e0b' }}
      />

      {/* Micro dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
    </div>
  );
};

export default BackgroundOrbs;
