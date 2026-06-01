"use client";

import { useState } from "react";
import ProductCard from "@/components/catalog/product-card";
import StatsRow from "@/components/catalog/stats-row";
import ChatWindow from "@/components/chat/chat-window";
import { useAnalytics } from "@/hooks/use-analytics";
import { useProducts } from "@/hooks/use-products";
import type { Product } from "@/types";

const CATEGORIES = ["all", "Electronics", "Fashion", "Food", "Books", "Sports"];

// Mock products as fallback while backend is being set up
const MOCK_PRODUCTS: Product[] = [
  {
    category: "Electronics",
    created_at: "",
    description: "",
    emoji: "📱",
    id: 1,
    is_recommended: true,
    name: "iPhone 15 Pro",
    price: 18500000,
    price_formatted: "Rp 18.5jt",
    rating: 4.8,
    rating_count: 1243,
    slug: "iphone-15-pro",
    stock: 15,
    tags: ["Electronics", "Tech"],
  },
  {
    category: "Electronics",
    created_at: "",
    description: "",
    emoji: "💻",
    id: 2,
    is_recommended: true,
    name: "MacBook Air M3",
    price: 21900000,
    price_formatted: "Rp 21.9jt",
    rating: 4.9,
    rating_count: 879,
    slug: "macbook-air-m3",
    stock: 8,
    tags: ["Electronics", "Tech"],
  },
  {
    category: "Electronics",
    created_at: "",
    description: "",
    emoji: "🎧",
    id: 3,
    is_recommended: false,
    name: "Sony WH-1000XM5",
    price: 5200000,
    price_formatted: "Rp 5.2jt",
    rating: 4.7,
    rating_count: 654,
    slug: "sony-wh-1000xm5",
    stock: 22,
    tags: ["Electronics"],
  },
  {
    category: "Electronics",
    created_at: "",
    description: "",
    emoji: "🖱️",
    id: 4,
    is_recommended: false,
    name: "Logitech MX Master 3",
    price: 1400000,
    price_formatted: "Rp 1.4jt",
    rating: 4.6,
    rating_count: 431,
    slug: "logitech-mx-master-3",
    stock: 35,
    tags: ["Electronics"],
  },
  {
    category: "Sports",
    created_at: "",
    description: "",
    emoji: "👟",
    id: 5,
    is_recommended: true,
    name: "Nike Air Max 2024",
    price: 2300000,
    price_formatted: "Rp 2.3jt",
    rating: 4.5,
    rating_count: 321,
    slug: "nike-air-max-2024",
    stock: 44,
    tags: ["Sports", "Fashion"],
  },
  {
    category: "Sports",
    created_at: "",
    description: "",
    emoji: "💪",
    id: 6,
    is_recommended: false,
    name: "Whey Protein Gold",
    price: 450000,
    price_formatted: "Rp 450rb",
    rating: 4.4,
    rating_count: 567,
    slug: "whey-protein-gold",
    stock: 88,
    tags: ["Sports"],
  },
  {
    category: "Books",
    created_at: "",
    description: "",
    emoji: "📚",
    id: 7,
    is_recommended: true,
    name: "Atomic Habits",
    price: 89000,
    price_formatted: "Rp 89rb",
    rating: 4.9,
    rating_count: 2341,
    slug: "atomic-habits",
    stock: 120,
    tags: ["Books"],
  },
  {
    category: "Fashion",
    created_at: "",
    description: "",
    emoji: "👕",
    id: 8,
    is_recommended: false,
    name: "Uniqlo HEATTECH Tee",
    price: 199000,
    price_formatted: "Rp 199rb",
    rating: 4.3,
    rating_count: 890,
    slug: "uniqlo-heattech",
    stock: 200,
    tags: ["Fashion"],
  },
  {
    category: "Food",
    created_at: "",
    description: "",
    emoji: "☕",
    id: 9,
    is_recommended: false,
    name: "Kopi Flores AAA",
    price: 125000,
    price_formatted: "Rp 125rb",
    rating: 4.7,
    rating_count: 445,
    slug: "kopi-flores-aaa",
    stock: 66,
    tags: ["Food"],
  },
  {
    category: "Electronics",
    created_at: "",
    description: "",
    emoji: "📟",
    id: 10,
    is_recommended: true,
    name: "iPad Pro M4",
    price: 16800000,
    price_formatted: "Rp 16.8jt",
    rating: 4.8,
    rating_count: 667,
    slug: "ipad-pro-m4",
    stock: 12,
    tags: ["Electronics", "Tech"],
  },
  {
    category: "Fashion",
    created_at: "",
    description: "",
    emoji: "👖",
    id: 11,
    is_recommended: false,
    name: "Levi's 511 Slim",
    price: 699000,
    price_formatted: "Rp 699rb",
    rating: 4.4,
    rating_count: 334,
    slug: "levis-511",
    stock: 77,
    tags: ["Fashion"],
  },
  {
    category: "Sports",
    created_at: "",
    description: "",
    emoji: "🧘",
    id: 12,
    is_recommended: false,
    name: "Yoga Mat Premium",
    price: 380000,
    price_formatted: "Rp 380rb",
    rating: 4.6,
    rating_count: 278,
    slug: "yoga-mat-premium",
    stock: 55,
    tags: ["Sports"],
  },
];

export default function CatalogPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const { data: productsData, isError } = useProducts(activeCategory);
  const { data: analyticsData } = useAnalytics();

  // Use mock data as fallback
  const products =
    isError || !productsData
      ? activeCategory === "all"
        ? MOCK_PRODUCTS
        : MOCK_PRODUCTS.filter((p) => p.tags.includes(activeCategory))
      : productsData.data;

  return (
    <div>
      <StatsRow data={analyticsData} />

      <div className="grid grid-cols-[1fr_340px] gap-4">
        {/* Catalog panel */}
        <div className="bg-[#1E293B]/80 border border-white/5 rounded-xl overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3.5 border-b border-white/5">
            <div className="w-[7px] h-[7px] rounded-full bg-violet-500" />
            <h2 className="font-syne text-[13px] font-bold">Product Catalog</h2>
            <span className="ml-auto text-[11px] text-slate-500">
              {products.length} produk
            </span>
          </div>

          {/* Filters */}
          <div className="flex gap-2 px-4 py-3 border-b border-white/5 flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                className={`px-3 py-1 rounded-full text-[11px] border transition-all font-dm ${
                  activeCategory === cat
                    ? "bg-violet-500/15 text-violet-300 border-violet-500/40"
                    : "border-white/5 text-slate-500 hover:border-white/10 hover:text-slate-400"
                }`}
                key={cat}
                onClick={() => setActiveCategory(cat)}
                type="button"
              >
                {cat === "all" ? "All" : cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-[repeat(auto-fill,minmax(148px,1fr))] gap-3 p-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Mini AI chat */}
        <div
          className="bg-[#1E293B]/80 border border-white/5 rounded-xl flex flex-col overflow-hidden"
          style={{ maxHeight: "520px" }}
        >
          <div className="flex items-center gap-2 px-4 py-3.5 border-b border-white/5 flex-shrink-0">
            <div className="w-[7px] h-[7px] rounded-full bg-cyan-500" />
            <h2 className="font-syne text-[13px] font-bold">AI Assistant</h2>
            <span className="ml-auto text-[11px] text-slate-500">
              Powered by OpenRouter
            </span>
          </div>
          <ChatWindow compact />
        </div>
      </div>
    </div>
  );
}
