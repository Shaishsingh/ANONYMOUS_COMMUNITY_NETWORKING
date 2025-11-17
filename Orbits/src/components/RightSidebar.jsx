import React from "react";

export default function RightSidebar() {
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
