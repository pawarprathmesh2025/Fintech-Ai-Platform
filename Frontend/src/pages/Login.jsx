import AnimatedBackground from "../components/AnimatedBackground";
import FloatingIcons from "../components/FloatingIcons";
import LoginForm from "../components/LoginForm";

export default function LoginScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50 flex items-center justify-center p-4 overflow-hidden relative">

      <AnimatedBackground />

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">

        <FloatingIcons />

        <LoginForm />

      </div>

    </div>
  );
}