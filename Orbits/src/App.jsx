
import React, { useState } from "react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import PostCard from "./components/PostCard";
import RightSidebar from "./components/RightSidebar";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("Popular");
  const postData = {
  Popular: [
    { title: "Trending Topic!", body: "This is what's hot right now...", upvotes: 900, comments: 120 },
    { title: "Breaking News", body: "Something big just happened...", upvotes: 500, comments: 80 },
  ],

  Memes: [
    { title: "Meme of the Day 😂", body: "Funniest meme you'll see today!", upvotes: 1200, comments: 220 },
    { title: "Relatable Meme", body: "When code works on first try...", upvotes: 800, comments: 90 },
  ],

  "Jobs updates": [
    { title: "Internship Alert", body: "New internships available", upvotes: 200, comments: 40 },
    { title: "Placement Drive", body: "Big companies coming soon", upvotes: 150, comments: 30 },
  ],

  "Study Buddies": [
    { title: "Study Group Open", body: "Join us for group study session.", upvotes: 300, comments: 50 },
  ],

};


  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      <Header />

      <div className="grid grid-cols-[260px_1fr_320px] h-[calc(100vh-60px)]">
        <Sidebar 
  selectedCategory={selectedCategory}
  setSelectedCategory={setSelectedCategory}
/>


        <main className="space-y-6 p-6 overflow-y-auto">
          <div className="flex justify-between items-center px-2 pt-2">
            <h2 className="text-2xl font-semibold">{selectedCategory}</h2>
            <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full shadow transition duration-150">New post</button>
          </div>

          <div className="space-y-6">
  {postData[selectedCategory]?.map((post, index) => (
    <PostCard
      key={index}
      title={post.title}
      body={post.body}
      upvotes={post.upvotes}
      comments={post.comments}
    />
  ))}
</div>

        </main>

        <RightSidebar />
      </div>
    </div>
  );
}
