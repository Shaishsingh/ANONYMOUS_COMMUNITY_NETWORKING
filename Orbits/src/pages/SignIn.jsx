import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/app"); // direct login without credentials
  };

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center relative overflow-hidden">

      {/* Background glowing circles */}
      <div className="absolute top-[-80px] right-[-80px] w-[300px] h-[300px] bg-red-700 rounded-full blur-[130px] opacity-40"></div>
      <div className="absolute bottom-[-80px] left-[-80px] w-[300px] h-[300px] bg-red-700 rounded-full blur-[140px] opacity-40"></div>

      <div className="flex w-full max-w-6xl justify-between items-center px-10">

        {/* LEFT SIDE TEXT */}
        <div className="text-white mt-10">
          <h1 className="text-6xl font-extrabold">Roll the Carpet.!</h1>
          <div className="mt-6 w-[500px] border-b border-dotted border-gray-600"></div>
        </div>

        {/* LOGIN CARD */}
        <div className="w-[400px] bg-[#0f0f10]/80 backdrop-blur-xl p-10 rounded-2xl border border-white/10 shadow-xl relative">

          {/* top highlight */}
          <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-red-300 rounded-full blur-[120px] opacity-20"></div>

          <h2 className="text-2xl font-semibold text-white mb-1">Sign In</h2>
          <p className="text-gray-400 text-sm mb-7">Welcome back! Let's get you inside.</p>

          {/* Email */}
          <input
            placeholder="Email"
            type="email"
            className="w-full mb-4 px-4 py-2 bg-transparent border border-gray-700 rounded-md text-white outline-none focus:border-red-500 transition"
          />

          {/* Password */}
          <input
            placeholder="Password"
            type="password"
            className="w-full mb-6 px-4 py-2 bg-transparent border border-gray-700 rounded-md text-white outline-none focus:border-red-500 transition"
          />

          {/* Sign In Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-gradient-to-r from-red-600 to-red-400 py-2 rounded-lg text-white font-semibold tracking-wide hover:opacity-90 transition"
          >
            Sign In
          </button>

          {/* Sign Up Link */}
          <p className="text-gray-400 text-sm text-center mt-5">
            No account?{" "}
            <Link to="/signup" className="text-white font-medium hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
