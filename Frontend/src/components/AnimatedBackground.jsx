import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0">

      <div className="absolute inset-0 opacity-30">

        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(6,182,212,0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(20,184,166,0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(59,130,246,0.3) 0%, transparent 50%)
            `
          }}
        />

      </div>

      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{ backgroundPosition: ['0px 0px','50px 50px'] }}
        transition={{ duration:20, repeat:Infinity, ease:"linear" }}
        style={{
          backgroundImage:
          `linear-gradient(rgba(6,182,212,0.15) 1px, transparent 1px),
           linear-gradient(90deg, rgba(6,182,212,0.15) 1px, transparent 1px)`,
          backgroundSize:'50px 50px'
        }}
      />

    </div>
  );
}