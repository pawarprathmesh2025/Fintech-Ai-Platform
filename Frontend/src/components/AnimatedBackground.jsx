import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <>
      {/* Gradient mesh */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 30%, rgba(16,185,129,0.3) 0%, transparent 50%),
            radial-gradient(circle at 70% 70%, rgba(6,182,212,0.3) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(59,130,246,0.3) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Moving dots */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(20,184,166,0.3) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Floating gradient orbs */}
      <motion.div
        className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-emerald-200/60 to-teal-300/60 rounded-full blur-3xl"
        animate={{ scale: [1, 1.4, 1], x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-cyan-200/60 to-blue-300/60 rounded-full blur-3xl"
        animate={{ scale: [1.3, 1, 1.3], x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </>
  );
}