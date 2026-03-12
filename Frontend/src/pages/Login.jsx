import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login Data:", {
      email,
      password
    });

    // Later we will connect this to backend API
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-lg w-96">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Fintech Login
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {/* Email */}
          <input
            type="email"
            placeholder="Enter your email"
            className="border p-3 rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Enter your password"
            className="border p-3 rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Login Button */}
          <button
            type="submit"
            className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600"
          >
            Login
          </button>

        </form>

        {/* Signup Link */}
        <p className="text-center mt-4 text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-green-600 font-medium">
            Signup
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;