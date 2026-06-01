"use client";

import { Bell, Search, User } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import AuthModal from "@/components/ui/auth-modal";

const titles: Record<string, string> = {
  "/analytics": "Analytics",
  "/catalog": "Dashboard",
  "/chat": "AI Chatbot",
  "/search": "Semantic Search",
};

export default function Topbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [showAuth, setShowAuth] = useState(false);
  const [q, setQ] = useState("");

  const title =
    Object.entries(titles).find(([k]) => pathname.startsWith(k))?.[1] ??
    "SmartCatalog";

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (q.trim()) {
      router.push(`/search?q=${encodeURIComponent(q.trim())}`);
      setQ("");
    }
  }

  return (
    <>
      <header className="h-[52px] flex items-center px-6 gap-3 border-b border-white/5 bg-[#0F172A] flex-shrink-0">
        <h1 className="font-syne text-[15px] font-bold">{title}</h1>
        <span className="text-[11px] px-2.5 py-0.5 rounded-full font-semibold bg-emerald-500/15 text-emerald-400">
          ● Live
        </span>
        <div className="flex-1" />
        <form
          className="flex items-center gap-2 bg-[#1E293B] border border-white/5 rounded-lg px-3 py-1.5 w-[220px]"
          onSubmit={handleSearch}
        >
          <Search className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
          <input
            className="bg-transparent text-[13px] text-slate-200 placeholder-slate-500 outline-none w-full font-dm"
            onChange={(e) => setQ(e.target.value)}
            placeholder="Quick search..."
            type="text"
            value={q}
          />
        </form>
        <button
          className="w-8 h-8 rounded-lg border border-white/5 bg-transparent flex items-center justify-center text-slate-500 hover:text-slate-200 hover:bg-[#1E293B] transition-colors"
          type="button"
        >
          <span className="sr-only">Notifications</span>
          <Bell className="w-4 h-4" />
        </button>
        <button
          className="w-8 h-8 rounded-lg border border-white/5 bg-transparent flex items-center justify-center text-slate-500 hover:text-slate-200 hover:bg-[#1E293B] transition-colors"
          onClick={() => setShowAuth(true)}
          type="button"
        >
          <span className="sr-only">User Menu</span>
          <User className="w-4 h-4" />
        </button>
      </header>

      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </>
  );
}
