import React from "react";

export default function PostCard({ title, body, upvotes, comments }) {
  return (
    <article className="bg-[#0f0f10]/50 rounded-xl p-5 shadow-inner border border-white/5 hover:border-red-600/20 transition duration-200 cursor-pointer">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-red-600/80 flex items-center justify-center text-white font-semibold flex-shrink-0">U</div>
        <div className="flex-1">
          <div className="text-xs text-gray-400 mb-1 flex justify-between items-center">
            <span>User anonymous</span>
            <button className="text-gray-400 hover:text-white">...</button>
          </div>
          <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
          <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">{body}</p>
          <div className="mt-4 flex items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2 hover:text-red-500 transition duration-100">
              <span role="img" aria-label="Upvotes">⬆️</span> 
              <span className="font-medium">{upvotes}</span>
            </div>
            <div className="flex items-center gap-2 hover:text-red-500 transition duration-100">
              <span role="img" aria-label="Comments">💬</span> 
              <span className="font-medium">{comments}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
