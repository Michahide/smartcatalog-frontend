import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";
import { QUERY_KEYS } from "@/lib/query-key";
import type { AnalyticsData } from "@/types";

export function useAnalytics() {
  return useQuery({
    queryFn: async () => {
      const { data } = await api.get<AnalyticsData>("/api/analytics");
      return data;
    },
    queryKey: [QUERY_KEYS.ANALYTICS],
    refetchInterval: 30_000, // live refresh every 30s
  });
}
