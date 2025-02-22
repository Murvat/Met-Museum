interface IFilter {
  handleFilter: (filter: string) => void;
}

export default function Filter({ handleFilter }: IFilter) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-64">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">Filters</h3>
      <div className="space-y-2">
        <button
          onClick={() => handleFilter("plus")}
          className="w-full bg-gray-100 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-200 transition-all text-left"
        >
          Width &gt; 3000px
        </button>
        <button
          onClick={() => handleFilter("minus")}
          className="w-full bg-gray-100 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-200 transition-all text-left"
        >
          Width &lt; 3000px
        </button>
         <button
          onClick={() => handleFilter("reset")}
          className="w-full bg-gray-100 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-200 transition-all text-left"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
}