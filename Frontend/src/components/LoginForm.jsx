import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { Eye, EyeOff, TrendingUp } from "lucide-react";

export default function LoginForm() {

const navigate = useNavigate();

const [showPassword, setShowPassword] = useState(false);
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleLogin = (e) => {
e.preventDefault();
navigate("/app");
};

return (

<motion.div
className="flex items-center justify-center"
initial={{ opacity: 0, x: 50 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8 }}
>

<div className="w-full max-w-md">

<motion.div
className="bg-white/70 backdrop-blur-2xl border border-white/60 rounded-3xl p-10 shadow-2xl"
initial={{ scale: 0.9, opacity: 0, y: 20 }}
animate={{ scale: 1, opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: 0.2 }}
>

{/* Header */}

<div className="text-center mb-8">

<div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-400 via-teal-500 to-emerald-500 rounded-3xl mb-4 shadow-lg">

<TrendingUp size={36} className="text-white"/>

</div>

<h1 className="text-4xl font-bold text-gray-900 mb-2">
Welcome Back
</h1>

<p className="text-gray-600">
Sign in to continue your journey
</p>

</div>

{/* Form */}

<form onSubmit={handleLogin} className="space-y-6">

<div>

<label className="text-gray-800 font-semibold block mb-2">
Email Address
</label>

<input
type="email"
placeholder="you@example.com"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="w-full h-14 border-2 border-gray-200 rounded-xl px-4 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100 outline-none"
required
/>

</div>

<div>

<label className="text-gray-800 font-semibold block mb-2">
Password
</label>

<div className="relative">

<input
type={showPassword ? "text" : "password"}
placeholder="Enter your password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
className="w-full h-14 border-2 border-gray-200 rounded-xl px-4 pr-12 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100 outline-none"
required
/>

<button
type="button"
onClick={()=>setShowPassword(!showPassword)}
className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
>

{showPassword ? <EyeOff size={20}/> : <Eye size={20}/>}

</button>

</div>

</div>

<div className="flex justify-between text-sm">

<label className="flex items-center text-gray-700">

<input type="checkbox" className="mr-2 accent-cyan-500"/>

Remember me

</label>

<a href="#" className="text-cyan-600 font-semibold">
Forgot password?
</a>

</div>

<button
type="submit"
className="w-full h-14 rounded-xl text-white font-semibold bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600"
>

Sign In

</button>

</form>

{/* Signup */}

<p className="text-center mt-8 text-gray-700">

Don't have an account?

<button
onClick={()=>navigate("/signup")}
className="ml-2 text-cyan-600 font-bold"
>

Sign Up

</button>

</p>

</motion.div>

</div>

</motion.div>

);

}