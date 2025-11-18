import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex justify-center items-center">
      <div className="max-w-xl bg-[#0f0f10]/70 p-8 rounded-xl border border-white/10">
        <h1 className="text-3xl font-bold mb-4">Welcome to ORBITS</h1>
        <p className="text-gray-300 mb-6">
          ORBITS is a community platform where you can join clubs, explore posts,
          chat with friends and more.
        </p>

        <div className="flex gap-4">
          <Link to="/signup" className="bg-red-600 px-4 py-2 rounded-md">Sign Up</Link>
          <Link to="/signin" className="border border-white/20 px-4 py-2 rounded-md">Sign In</Link>
        </div>
      </div>
    </div>
  );
}
