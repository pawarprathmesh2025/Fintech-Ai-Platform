import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, LineChart } from "lucide-react";
import { useNavigate } from "react-router";

export default function SignupForm() {

  const navigate = useNavigate()

  const [showPassword,setShowPassword]=useState(false)
  const [showConfirmPassword,setShowConfirmPassword]=useState(false)

  const [formData,setFormData]=useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:""
  })

  const handleChange=(field,value)=>{
    setFormData(prev=>({...prev,[field]:value}))
  }

  const handleSignup=(e)=>{
    e.preventDefault()

    if(formData.password===formData.confirmPassword){
      navigate("/app")
    }
  }

  return (

    <motion.div
      className="flex items-center justify-center"
      initial={{ opacity:0 , x:50 }}
      animate={{ opacity:1 , x:0 }}
      transition={{ duration:0.8 }}
    >

      <div className="w-full max-w-md">

        {/* Glass Card */}
        <motion.div
          className="bg-white/70 backdrop-blur-2xl border border-white/60 rounded-3xl p-10 shadow-2xl"
          initial={{ scale:0.9 , opacity:0 , y:20 }}
          animate={{ scale:1 , opacity:1 , y:0 }}
          transition={{ duration:0.6 , delay:0.2 }}
          whileHover={{ scale:1.01 }}
          style={{
            boxShadow:'0 8px 32px 0 rgba(20,184,166,0.15),0 0 0 1px rgba(255,255,255,0.5)'
          }}
        >

          {/* Logo */}
          <div className="text-center mb-8">

            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 rounded-3xl mb-4 shadow-lg"
              whileHover={{ rotate:360 , scale:1.1 }}
              transition={{ duration:0.6 }}
            >
              <LineChart size={36} className="text-white"/>
            </motion.div>

            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 bg-clip-text text-transparent mb-2">
              Create Account
            </h1>

            <p className="text-gray-600 text-lg">
              Start your financial journey today
            </p>

          </div>


          {/* FORM */}
          <form onSubmit={handleSignup} className="space-y-5">

            {/* Name */}
            <div>
              <label className="text-gray-800 mb-2 block font-semibold">
                Full Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e)=>handleChange("name",e.target.value)}
                className="w-full bg-white/80 border-2 border-gray-200 h-14 px-4 rounded-xl focus:border-teal-400 focus:ring-4 focus:ring-teal-100 outline-none"
                required
              />
            </div>


            {/* Email */}
            <div>
              <label className="text-gray-800 mb-2 block font-semibold">
                Email Address
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e)=>handleChange("email",e.target.value)}
                className="w-full bg-white/80 border-2 border-gray-200 h-14 px-4 rounded-xl focus:border-teal-400 focus:ring-4 focus:ring-teal-100 outline-none"
                required
              />
            </div>


            {/* Password */}
            <div>

              <label className="text-gray-800 mb-2 block font-semibold">
                Password
              </label>

              <div className="relative">

                <input
                  type={showPassword ? "text":"password"}
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={(e)=>handleChange("password",e.target.value)}
                  className="w-full bg-white/80 border-2 border-gray-200 h-14 px-4 pr-12 rounded-xl focus:border-teal-400 focus:ring-4 focus:ring-teal-100 outline-none"
                  required
                />

                <button
                  type="button"
                  onClick={()=>setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-teal-600"
                >
                  {showPassword ? <EyeOff size={22}/> : <Eye size={22}/>}
                </button>

              </div>

            </div>


            {/* Confirm Password */}
            <div>

              <label className="text-gray-800 mb-2 block font-semibold">
                Confirm Password
              </label>

              <div className="relative">

                <input
                  type={showConfirmPassword ? "text":"password"}
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={(e)=>handleChange("confirmPassword",e.target.value)}
                  className="w-full bg-white/80 border-2 border-gray-200 h-14 px-4 pr-12 rounded-xl focus:border-teal-400 focus:ring-4 focus:ring-teal-100 outline-none"
                  required
                />

                <button
                  type="button"
                  onClick={()=>setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-teal-600"
                >
                  {showConfirmPassword ? <EyeOff size={22}/> : <Eye size={22}/>}
                </button>

              </div>

            </div>


            {/* Terms */}
            <div className="flex items-start text-sm">

              <input
                type="checkbox"
                className="mr-2 mt-1 w-4 h-4 accent-teal-500"
                required
              />

              <label className="text-gray-700">
                I agree to the{" "}
                <span className="text-teal-600 font-semibold">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-teal-600 font-semibold">
                  Privacy Policy
                </span>
              </label>

            </div>


            {/* Button */}
            <button
              type="submit"
              className="w-full h-14 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white rounded-xl shadow-lg transition-all font-semibold text-lg relative overflow-hidden"
            >

              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                animate={{ x:['-100%','100%'] }}
                transition={{
                  duration:2,
                  repeat:Infinity,
                  ease:"linear"
                }}
              />

              <span className="relative z-10">
                Create Account
              </span>

            </button>

          </form>


          {/* Sign In */}
          <div className="text-center mt-8">

            <p className="text-gray-700 text-base">

              Already have an account?{" "}

              <button
                onClick={()=>navigate("/login")}
                className="text-teal-600 font-bold hover:text-teal-700"
              >
                Sign In
              </button>

            </p>

          </div>

        </motion.div>

      </div>

    </motion.div>
  )
}