import React from "react";

export default function Header() {
  return (
    <header className="h-[60px] bg-[#0f0f10]/60 border-b border-gray-700/50 flex items-center px-4 shadow-xl">
      <div className="w-[260px] font-bold text-xl text-white">ORBITS</div>

      <div className="flex-1 min-w-0 flex justify-center">
        <div className="w-full max-w-xl">
          <input
            placeholder="Search Community"
            className="w-full bg-[#1a1a1a] border border-gray-700/50 outline-none rounded-lg px-4 py-2 text-sm placeholder-gray-500 focus:ring-1 focus:ring-red-600 transition duration-200"
          />
        </div>
      </div>

      <div className="w-[320px] flex items-center justify-end gap-3 pr-2">
        <button className="text-gray-300 hover:text-white transition duration-150 p-2 rounded-full hover:bg-white/5">
          <span role="img" aria-label="Messages" className="text-xl">💬</span>
        </button>
        <button className="text-gray-300 hover:text-white transition duration-150 p-2 rounded-full hover:bg-white/5">
          <span role="img" aria-label="Notifications" className="text-xl">🔔</span>
        </button>
        <button className="bg-red-700 hover:bg-red-800 text-white font-medium px-4 py-2 rounded-md text-sm transition duration-150 ml-2">
          Log out
        </button>
      </div>
    </header>
  );
}
