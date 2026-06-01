import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";
import { QUERY_KEYS } from "@/lib/query-key";
import type { PaginatedResponse, Product } from "@/types";

export function useProducts(category?: string, search?: string) {
  return useQuery({
    queryFn: async () => {
      const params: Record<string, string> = {};
      if (category && category !== "all") params["category"] = category;
      if (search) params["search"] = search;
      const { data } = await api.get<PaginatedResponse<Product>>(
        "/api/products",
        { params },
      );
      return data;
    },
    queryKey: [QUERY_KEYS.PRODUCTS, category, search],
  });
}

export function useRecommendedProducts() {
  return useQuery({
    queryFn: async () => {
      const { data } = await api.get<Product[]>("/api/products/recommended");
      return data;
    },
    queryKey: [QUERY_KEYS.PRODUCTS, QUERY_KEYS.RECOMMENDED],
  });
}

export function useProduct(id: number) {
  return useQuery({
    enabled: !!id,
    queryFn: async () => {
      const { data } = await api.get<Product>(`/api/products/${id}`);
      return data;
    },
    queryKey: [QUERY_KEYS.PRODUCT, id],
  });
}
