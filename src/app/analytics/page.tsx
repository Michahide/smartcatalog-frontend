"use client";

import { useAnalytics } from "@/hooks/use-analytics";

const MOCK_ACTIVITY = [
  {
    color: "bg-violet-500/15",
    icon: "🤖",
    text: "AI merekomendasikan 3 produk ke User #4821",
    time: "2m ago",
  },
  {
    color: "bg-emerald-500/15",
    icon: "🛒",
    text: "Pembelian: iPhone 15 Pro – Rp 18.5jt",
    time: "5m ago",
  },
  {
    color: "bg-cyan-500/15",
    icon: "🔍",
    text: 'Semantic search: "earphone noise cancel"',
    time: "8m ago",
  },
  {
    color: "bg-amber-500/15",
    icon: "💬",
    text: "Chatbot session dimulai oleh User #3309",
    time: "12m ago",
  },
  {
    color: "bg-red-500/15",
    icon: "⚠️",
    text: "Stok Bose QC45 tersisa 2 unit",
    time: "18m ago",
  },
];

const SALES = [
  { cat: "Elektronik", color: "bg-violet-500", pct: 82 },
  { cat: "Fashion", color: "bg-cyan-500", pct: 64 },
  { cat: "Sports", color: "bg-emerald-500", pct: 58 },
  { cat: "Food", color: "bg-amber-500", pct: 45 },
  { cat: "Books", color: "bg-pink-500", pct: 31 },
];

const AI_KPI = [
  {
    bg: "bg-violet-500/10",
    color: "text-violet-300",
    label: "Click-Through Rate",
    value: "34%",
  },
  {
    bg: "bg-cyan-500/10",
    color: "text-cyan-300",
    label: "Revenue Lift",
    value: "7.2x",
  },
  {
    bg: "bg-emerald-500/10",
    color: "text-emerald-300",
    label: "Accuracy",
    value: "92%",
  },
  {
    bg: "bg-amber-500/10",
    color: "text-amber-300",
    label: "Avg Latency",
    value: "1.8s",
  },
];

export default function AnalyticsPage() {
  const { data } = useAnalytics();
  const activity = data?.activity_log ?? MOCK_ACTIVITY;

  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Sales by category */}
      <div className="bg-[#1E293B]/80 border border-white/5 rounded-xl p-5">
        <h2 className="font-syne text-[13px] font-bold mb-4">
          Penjualan per Kategori
        </h2>
        <div className="flex flex-col gap-3">
          {SALES.map((s) => (
            <div className="flex items-center gap-3" key={s.cat}>
              <span className="text-[11px] text-slate-500 w-20 text-right flex-shrink-0">
                {s.cat}
              </span>
              <div className="flex-1 h-2 bg-[#0F172A] rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-700 ${s.color}`}
                  style={{ width: `${s.pct}%` }}
                />
              </div>
              <span className="text-[11px] text-slate-300 font-medium w-9 text-right">
                {s.pct}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Traffic source donut */}
      <div className="bg-[#1E293B]/80 border border-white/5 rounded-xl p-5">
        <h2 className="font-syne text-[13px] font-bold mb-4">Sumber Traffic</h2>
        <div className="flex items-center gap-6">
          <svg height="110" viewBox="0 0 110 110" width="110">
            <circle
              cx="55"
              cy="55"
              fill="none"
              r="40"
              stroke="#0F172A"
              strokeWidth="20"
            />
            <circle
              cx="55"
              cy="55"
              fill="none"
              r="40"
              stroke="#7C3AED"
              strokeDasharray="100 151.8"
              strokeDashoffset="38"
              strokeWidth="20"
              transform="rotate(-90 55 55)"
            />
            <circle
              cx="55"
              cy="55"
              fill="none"
              r="40"
              stroke="#06B6D4"
              strokeDasharray="60 151.8"
              strokeDashoffset="-62"
              strokeWidth="20"
              transform="rotate(-90 55 55)"
            />
            <circle
              cx="55"
              cy="55"
              fill="none"
              r="40"
              stroke="#10B981"
              strokeDasharray="38 151.8"
              strokeDashoffset="-122"
              strokeWidth="20"
              transform="rotate(-90 55 55)"
            />
            <circle
              cx="55"
              cy="55"
              fill="none"
              r="40"
              stroke="#F59E0B"
              strokeDasharray="15 151.8"
              strokeDashoffset="-160"
              strokeWidth="20"
              transform="rotate(-90 55 55)"
            />
            <text
              fill="#F8FAFC"
              fontFamily="Syne, sans-serif"
              fontSize="14"
              fontWeight="700"
              textAnchor="middle"
              x="55"
              y="51"
            >
              39%
            </text>
            <text fill="#64748B" fontSize="9" textAnchor="middle" x="55" y="63">
              Organic
            </text>
          </svg>
          <div className="flex flex-col gap-2">
            {[
              { color: "bg-violet-500", label: "Organic 39%" },
              { color: "bg-cyan-500", label: "Direct 24%" },
              { color: "bg-emerald-500", label: "Social 15%" },
              { color: "bg-amber-500", label: "Other 22%" },
            ].map((item) => (
              <div
                className="flex items-center gap-2 text-[12px] text-slate-300"
                key={item.label}
              >
                <div className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Performance */}
      <div className="bg-[#1E293B]/80 border border-white/5 rounded-xl p-5">
        <h2 className="font-syne text-[13px] font-bold mb-4">
          Performa AI Recommendation
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {AI_KPI.map((kpi) => (
            <div
              className={`${kpi.bg} rounded-xl p-3.5 text-center`}
              key={kpi.label}
            >
              <p
                className={`font-syne text-[22px] font-extrabold ${kpi.color}`}
              >
                {kpi.value}
              </p>
              <p className="text-[10px] text-slate-500 mt-1">{kpi.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Activity log */}
      <div className="bg-[#1E293B]/80 border border-white/5 rounded-xl p-5">
        <h2 className="font-syne text-[13px] font-bold mb-4">Activity Log</h2>
        <div className="flex flex-col">
          {activity.map((act, i) => (
            <div
              className="flex items-center gap-3 py-2.5 border-b border-white/5 last:border-0"
              key={i}
            >
              <div
                className={`w-7 h-7 rounded-lg ${act.color} flex items-center justify-center text-[13px] flex-shrink-0`}
              >
                {act.icon}
              </div>
              <p className="flex-1 text-[12px] text-slate-300">{act.text}</p>
              <span className="text-[11px] text-slate-500 flex-shrink-0">
                {act.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
