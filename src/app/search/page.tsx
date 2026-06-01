import { Suspense } from "react";
import SearchView from "./search-view";

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-40 text-slate-500 text-[13px]">
          Loading search...
        </div>
      }
    >
      <SearchView />
    </Suspense>
  );
}
