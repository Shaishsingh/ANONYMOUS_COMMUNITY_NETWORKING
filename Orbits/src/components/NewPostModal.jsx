// src/components/NewPostModal.jsx
import React, { useEffect, useRef, useState } from "react";

/**
 * Props:
 * - open: boolean
 * - onClose: () => void
 * - onSubmit: (post) => void  // receives { title, body, upvotes, comments, flair, createdAt }
 */
export default function NewPostModal({ open, onClose, onSubmit }) {
  const MAX = 500;
  const [flair, setFlair] = useState("Question");
  const [text, setText] = useState("");
  const dialogRef = useRef(null);

  // reset when closed/opened and focus
  useEffect(() => {
    if (!open) {
      setText("");
      setFlair("Question");
      return;
    }
    const t = setTimeout(() => {
      dialogRef.current?.querySelector("textarea")?.focus();
    }, 50);

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handlePost = () => {
    const body = text.trim();
    if (!body) return;
    const post = {
      title: `${flair} • ${body.split("\n")[0].slice(0, 60)}`,
      body,
      upvotes: 0,
      comments: 0,
      flair,
      createdAt: new Date().toISOString(),
    };
    onSubmit(post);
    onClose();
  };

  return (
    <div
      onMouseDown={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      role="dialog"
      aria-modal="true"
    >
      <div
        ref={dialogRef}
        onMouseDown={(e) => e.stopPropagation()}
        className="w-[480px] max-w-full bg-[#0f0f10]/90 rounded-xl p-5 shadow-xl border border-white/6"
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-semibold">JD</div>
            <div>
              <div className="font-semibold text-white">Jane Doe</div>
              <div className="text-xs text-gray-400">Choose a flair:</div>
            </div>
          </div>

          <button onClick={onClose} aria-label="Close" className="text-gray-400 hover:text-white">✕</button>
        </div>

        <div className="mt-4 space-y-3">
          <div className="flex gap-3">
            {["Question", "Meme", "Quote"].map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFlair(f)}
                className={
                  "px-4 py-2 rounded-full text-sm transition " +
                  (flair === f
                    ? "bg-red-600 text-white"
                    : "bg-transparent border border-white/6 text-gray-300 hover:border-red-600")
                }
              >
                {f}
              </button>
            ))}
          </div>

          <textarea
            maxLength={MAX}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write your post here... (maximum 100 words suggested)"
            className="w-full min-h-[100px] bg-transparent border border-white/6 rounded-md p-3 text-gray-100 placeholder-gray-500 outline-none focus:border-red-600 transition"
          />

          <div className="flex items-center justify-between text-xs text-gray-400">
            <div>{Math.round((text.length / MAX) * 100)}% used</div>
            <div>{text.length}/{MAX} characters</div>
          </div>

          <div className="flex items-center justify-end gap-3 mt-1">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-md bg-transparent border border-white/6 text-gray-300"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handlePost}
              disabled={text.trim().length === 0}
              className={
                "px-5 py-2 rounded-md text-white font-medium transition " +
                (text.trim().length === 0
                  ? "bg-red-600/60 cursor-not-allowed"
                  : "bg-gradient-to-r from-red-600 to-red-400 hover:opacity-95")
              }
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
