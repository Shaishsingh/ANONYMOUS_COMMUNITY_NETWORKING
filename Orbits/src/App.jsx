import React from "react";
// 1. New Header component spanning the full width, matching the image look
function Header() {
  return (
    <header className="h-[60px] bg-[#0f0f10]/60 border-b border-gray-700/50 flex items-center px-4 shadow-xl">
      {/* Column 1 area: ORBITS Title */}
      <div className="w-[260px] font-bold text-xl text-white">ORBITS</div>

      {/* Column 2 area: Centrally aligned Search Bar */}
      <div className="flex-1 min-w-0 flex justify-center">
        <div className="w-full max-w-xl">
          <input
            placeholder="Search Community"
            // Styling to match the dark, non-rounded search bar in the image's context
            className="w-full bg-[#1a1a1a] border border-gray-700/50 outline-none rounded-lg px-4 py-2 text-sm placeholder-gray-500 focus:ring-1 focus:ring-red-600 transition duration-200"
          />
        </div>
      </div>

      {/* Column 3 area: Icons and Logout Button */}
      <div className="w-[320px] flex items-center justify-end gap-3 pr-2">
        {/* Chat and Notifications icons */}
        <button className="text-gray-300 hover:text-white transition duration-150 p-2 rounded-full hover:bg-white/5">
          <span role="img" aria-label="Messages" className="text-xl">💬</span>
        </button>
        <button className="text-gray-300 hover:text-white transition duration-150 p-2 rounded-full hover:bg-white/5">
          <span role="img" aria-label="Notifications" className="text-xl">🔔</span>
        </button>
        {/* Prominent Log out Button */}
        <button className="bg-red-700 hover:bg-red-800 text-white font-medium px-4 py-2 rounded-md text-sm transition duration-150 ml-2">
          Log out
        </button>
      </div>
    </header>
  );
}


export default function App() {
  return (
    // Applied dark background to the root container
    <div className="min-h-screen bg-gray-900 text-gray-200">
      <Header /> {/* Full-width header at the top */}
      
      {/* Content Grid (takes remaining height) */}
      <div className="grid grid-cols-[260px_1fr_320px] h-[calc(100vh-60px)]">
        <Sidebar />
        
        <main className="space-y-6 p-6 overflow-y-auto">
          {/* Topbar removed - content now starts immediately */}
          <div className="flex justify-between items-center px-2 pt-2">
            <h2 className="text-2xl font-semibold">Popular</h2>
            <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full shadow transition duration-150">New post</button>
          </div>
          <div className="space-y-6">
            <PostCard
              title="Title goes here"
              body="Lorem ipsum dolor sit amet consectetur. Curabitur penatibus augue sem at faucibus ultrices. Nisi in consequat libero aliquet sit. Sed varius donec feugiat nisl egestas sit elementum nunc. Quam tellus turpis in arcu egestas dis tortor."
              upvotes={703}
              comments={96}
            />
            <PostCard
              title="Another Title for a Post"
              body="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est."
              upvotes={521}
              comments={112}
            />
            <PostCard
              title="Scrolling is demonstrated with this post"
              body="Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vitae elit libero, a pharetra augue. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
              upvotes={344}
              comments={45}
            />
            <PostCard
              title="This is an extra post to ensure the main column scrolls"
              body="Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas sed diam eget risus varius blandit sit amet non magna."
              upvotes={288}
              comments={31}
            />
             <PostCard
              title="One more post for scrolling demonstration"
              body="Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Sed posuere consectetur est at lobortis."
              upvotes={192}
              comments={24}
            />
          </div>
        </main>
        <RightSidebar />
      </div>
    </div>
  );
}

function Sidebar() {
  const items = [
    "Popular",
    "Memes",
    "Jobs updates",
    "Study Buddies",
    "Research Center",
    "Anime & Manga Fans",
    "Cinephiles",
    "Hackathon",
    "Fashionistas",
    "Travel/Adventure",
    "Sports/Fitness",
    "E-sports",
    "Foodies",
    "Tech Enthusiasts",
    "Music Jammers",
    "Art & Design",
    "Programming",
    "Gaming Streams",
    "Philosophy Club",
    "Book Reviews"
  ];
  return (
    // Removed ORBITS title padding/container since it's now in the full Header
    <aside className="bg-[#0f0f10]/60 p-4 h-full overflow-y-auto">
      {/* ORBITS title removed from here */}
      <div className="space-y-2 pt-2"> {/* Added pt-2 for vertical spacing below the fixed header */}
        <nav className="space-y-2">
          {items.map((it, idx) => (
            <div
              key={it}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition duration-150 ${idx === 0 ? 'bg-red-600/90 text-white font-medium shadow-lg' : 'text-gray-300 hover:bg-white/5'}`}>
              <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs">{it[0]}</span>
              <span className="text-sm">{it}</span>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}

// Topbar function removed as it is now integrated into the Header component

function PostCard({ title, body, upvotes, comments }) {
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

function RightSidebar() {
  const chats = ["Username1","Username2","Username3","Username4"];
  return (
    <aside className="space-y-6 bg-[#0f0f10]/60 p-4 h-full overflow-y-auto">
      <div className="rounded-xl pt-2">
        <h4 className="font-semibold mb-3 text-white">Chats</h4>
        <div className="space-y-3">
          {chats.map((c, index) => (
            <div key={c} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition duration-150 cursor-pointer">
              <div className={`w-9 h-9 rounded-full ${index % 2 === 0 ? 'bg-red-600' : 'bg-blue-500'} flex items-center justify-center text-white font-semibold flex-shrink-0`}>
                {c[0]}
              </div>
              <div>
                <div className="font-medium text-sm">{c}</div>
                <div className="text-xs text-gray-400">Last message snippet...</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-xl">
        <h4 className="font-semibold mb-3 text-white">Favourite Community</h4>
        <div className="space-y-3 text-sm text-gray-300">
          <div className="p-3 rounded-lg border border-white/5 hover:border-red-600/30 transition duration-150 cursor-pointer">
            <div className="font-medium">Super-admin</div>
            <div className="text-xs text-gray-400">Lista cu bursieri.</div>
          </div>
          <div className="p-3 rounded-lg border border-white/5 hover:border-red-600/30 transition duration-150 cursor-pointer">
            <div className="font-medium">Super-admin</div>
            <div className="text-xs text-gray-400">Bursa luna lunie.</div>
          </div>
        </div>
      </div>
    </aside>
  );
}