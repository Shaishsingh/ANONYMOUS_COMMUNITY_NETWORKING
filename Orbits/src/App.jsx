import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import PostCard from "./components/PostCard";
import RightSidebar from "./components/RightSidebar";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      <Header />

      <div className="grid grid-cols-[260px_1fr_320px] h-[calc(100vh-60px)]">
        <Sidebar />

        <main className="space-y-6 p-6 overflow-y-auto">
          <div className="flex justify-between items-center px-2 pt-2">
            <h2 className="text-2xl font-semibold">Popular</h2>
            <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full shadow transition duration-150">New post</button>
          </div>

          <div className="space-y-6">
            <PostCard
              title="Title goes here"
              body="Lorem ipsum dolor sit amet consectetur..."
              upvotes={703}
              comments={96}
            />
            <PostCard
              title="Another Title for a Post"
              body="Pellentesque habitant morbi tristique..."
              upvotes={521}
              comments={112}
            />
            {/* Add more PostCard instances or map an array */}
          </div>
        </main>

        <RightSidebar />
      </div>
    </div>
  );
}
