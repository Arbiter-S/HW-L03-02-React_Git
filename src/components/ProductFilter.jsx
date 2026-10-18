function ProductFilter({
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  category,
  setCategory,
  search,
  setSearch,
}) {
  return (
    <aside className="w-[25%] rounded-2xl bg-amber-100 p-5">
      <div className="flex flex-col gap-4">
        <span className="border-b border-amber-500 pb-3 text-2xl font-bold text-gray-800">
          Filters
        </span>

        <input
          className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
          Min Price
          <input
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
            type="number"
            value={minPrice}
            onChange={(event) => setMinPrice(event.target.value)}
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
          Max Price
          <input
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
            type="number"
            value={maxPrice}
            onChange={(event) => setMaxPrice(event.target.value)}
          />
        </label>
      </div>
      <select
        value={category}
        onChange={(event) => setCategory(event.target.value)}
        className="mt-4 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
      >
        <option value="">All</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
      </select>
    </aside>
  );
}

export default ProductFilter;
