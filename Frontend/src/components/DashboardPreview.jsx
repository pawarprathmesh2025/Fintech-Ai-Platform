import { motion } from "framer-motion";
import {
  TrendingUp,
  LineChart,
  Calculator,
  ArrowUpRight,
  ArrowDownRight,
  Zap,
  Star,
} from "lucide-react";

export default function DashboardPreview() {
  const dataPoints = [
    { value: "+25%", color: "#10B981", delay: 0, bg: "#D1FAE5" },
    { value: "+18%", color: "#06B6D4", delay: 0.5, bg: "#CFFAFE" },
    { value: "-8%", color: "#EF4444", delay: 1, bg: "#FEE2E2" },
    { value: "+32%", color: "#14B8A6", delay: 1.5, bg: "#CCFBF1" },
    { value: "+12%", color: "#0EA5E9", delay: 2, bg: "#E0F2FE" },
  ];

  return (
    <motion.div
      className="hidden lg:flex items-center justify-center relative"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <div className="relative w-full h-[700px]">

        {/* Portfolio Card */}
        <motion.div
          className="absolute top-20 left-10 bg-white/80 backdrop-blur-xl border border-emerald-200 rounded-3xl p-6 w-72 shadow-2xl"
          whileHover={{ scale: 1.08 }}
        >
          <div className="flex justify-between mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center">
              <TrendingUp className="text-white" />
            </div>

            <span className="text-emerald-600 font-bold">+24%</span>
          </div>

          <p className="text-gray-500 text-sm">Total Portfolio</p>
          <h2 className="text-3xl font-bold">$127,549</h2>
        </motion.div>

        {/* Investment Card */}
        <motion.div
          className="absolute top-60 right-10 bg-white/80 backdrop-blur-xl border border-cyan-200 rounded-3xl p-6 w-72 shadow-2xl"
          whileHover={{ scale: 1.08 }}
        >
          <div className="flex justify-between mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center">
              <LineChart className="text-white" />
            </div>

            <div className="flex items-center gap-1 text-cyan-600">
              <Zap size={18} /> Active
            </div>
          </div>

          <p className="text-gray-500 text-sm">Investments</p>
          <h2 className="text-3xl font-bold">24 Assets</h2>
        </motion.div>

        {/* Savings Card */}
        <motion.div
          className="absolute bottom-20 left-20 bg-white/80 backdrop-blur-xl border border-teal-200 rounded-3xl p-6 w-72 shadow-2xl"
          whileHover={{ scale: 1.08 }}
        >
          <div className="flex justify-between mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-2xl flex items-center justify-center">
              <Calculator className="text-white" />
            </div>

            <div className="flex items-center gap-1 text-teal-600">
              <Star size={18} /> Updated
            </div>
          </div>

          <p className="text-gray-500 text-sm">Monthly Savings</p>
          <h2 className="text-3xl font-bold">$4,250</h2>
        </motion.div>

        {/* Floating percentages */}
        {dataPoints.map((p, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${12 + i * 16}%`,
              top: `${15 + (i % 3) * 22}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              y: [0, -100],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              delay: p.delay,
              repeat: Infinity,
            }}
          >
            <div
              className="px-4 py-2 rounded-xl font-bold"
              style={{
                background: p.bg,
                border: `2px solid ${p.color}`,
                color: p.color,
              }}
            >
              {p.value}
            </div>
          </motion.div>
        ))}

        <ArrowUpRight className="absolute top-1/4 right-1/4 text-emerald-500" size={50} />
        <ArrowDownRight className="absolute bottom-1/3 left-1/3 text-red-500" size={50} />

      </div>
    </motion.div>
  );
}