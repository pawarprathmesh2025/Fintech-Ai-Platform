import { motion } from "framer-motion";
import SignupForm from "../components/SignupForm";
import DashboardPreview from "../components/DashboardPreview";
import AnimatedBackground from "../components/AnimatedBackground";

export default function SignupScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center p-4 overflow-hidden relative">

      <AnimatedBackground />

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">

        {/* LEFT SIDE */}
        <DashboardPreview />

        {/* RIGHT SIDE */}
        <SignupForm />

      </div>
    </div>
  );
}