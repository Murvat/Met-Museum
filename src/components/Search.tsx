import { useState } from "react";

interface ISearch {
  onSearch: (query: string) => void; // Callback to pass the search query to the parent component
}

export default function Search({ onSearch }: ISearch) {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // Pass the search query to the parent component
  };

  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search by author..."
        value={query}
        onChange={handleSearch}
        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {query && (
        <button
          onClick={() => {
            setQuery(""); // Clear the search query
            onSearch(""); // Reset the search in the parent component
          }}
          className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300"
        >
          Clear
        </button>
      )}
    </div>
  );
}