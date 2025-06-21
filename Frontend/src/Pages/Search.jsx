// src/pages/Search.jsx
import { useSearchParams } from "react-router-dom";

export default function Search() {
  const [params] = useSearchParams();
  const query = params.get("q");

  return (
    <div className="mt-20 px-4">
      <h2 className="text-2xl font-bold mb-4">
        Search Results for "<span className="text-red-500">{query}</span>"
      </h2>
      {/* Map your filtered products here */}
      <p className="text-gray-600">Showing search results...</p>
    </div>
  );
}
