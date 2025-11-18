import React from "react";

export default function Sidebar({ selectedCategory, setSelectedCategory }) {
  const items = [
    "Popular","Memes","Jobs updates","Study Buddies","Research Center",
    "Anime & Manga Fans","Cinephiles","Hackathon","Fashionistas","Travel/Adventure",
    "Sports/Fitness","E-sports","Foodies","Tech Enthusiasts","Music Jammers",
    "Art & Design","Programming","Gaming Streams","Philosophy Club","Book Reviews"
  ];

  return (
    <aside className="bg-[#0f0f10]/60 p-4 h-full overflow-y-auto">
      <nav className="space-y-2">
        {items.map((it) => (
          <div
            key={it}
            onClick={() => setSelectedCategory(it)}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition 
            ${selectedCategory === it 
              ? "bg-red-600 text-white" 
              : "text-gray-300 hover:bg-white/5"}`}
          >
            <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs">
              {it[0]}
            </span>
            <span>{it}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}
