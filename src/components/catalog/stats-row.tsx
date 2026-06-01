import { TrendingDown, TrendingUp } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string | number;
  delta: string;
  positive?: boolean;
  accentColor: string;
}

function StatCard({
  label,
  value,
  delta,
  positive = true,
  accentColor,
}: StatCardProps) {
  return (
    <div className="relative bg-[#1E293B]/80 border border-white/5 rounded-xl p-4 overflow-hidden">
      <div className={`absolute top-0 left-0 right-0 h-[2px] ${accentColor}`} />
      <p className="text-[11px] text-slate-500 uppercase tracking-[0.8px] mb-1.5">
        {label}
      </p>
      <p className="font-syne text-[24px] font-bold leading-none">{value}</p>
      <p
        className={`text-[11px] mt-1.5 flex items-center gap-1 ${positive ? "text-emerald-400" : "text-red-400"}`}
      >
        {positive ? (
          <TrendingUp className="w-3 h-3" />
        ) : (
          <TrendingDown className="w-3 h-3" />
        )}
        {delta}
      </p>
    </div>
  );
}

interface Props {
  data?: {
    total_products: number;
    ai_recommendations: number;
    active_sessions: number;
    revenue_formatted: string;
  };
}

export default function StatsRow({ data }: Props) {
  const stats = [
    {
      accentColor: "bg-violet-500",
      delta: "12 this week",
      label: "Total Products",
      positive: true,
      value: data?.total_products ?? 248,
    },
    {
      accentColor: "bg-cyan-500",
      delta: "34% CTR",
      label: "AI Recommendations",
      positive: true,
      value: data?.ai_recommendations ?? "1.2K",
    },
    {
      accentColor: "bg-emerald-500",
      delta: "8 online now",
      label: "Active Sessions",
      positive: true,
      value: data?.active_sessions ?? 87,
    },
    {
      accentColor: "bg-amber-500",
      delta: "3% vs yesterday",
      label: "Revenue Today",
      positive: false,
      value: data?.revenue_formatted ?? "Rp 4.2M",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-3 mb-6">
      {stats.map((s) => (
        <StatCard key={s.label} {...s} />
      ))}
    </div>
  );
}
