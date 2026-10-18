import ProductDetails from "./ProductDetails";

function ProductCard({ title, price, description, category, image, rating, setSelectedProduct }) {
  const { rate, count } = rating;

  return (
    <div className="flex h-140 flex-col rounded-2xl bg-[#f9b652] shadow-sm"
     onClick={(event) => setSelectedProduct({ title, price, description, category, image, rating, setSelectedProduct })}>
      <div className="flex h-64 items-center justify-center p-6">
        <img src={image} alt={title} className="h-full w-full object-contain" />
      </div>

      <div className="flex min-h-0 flex-1 flex-col gap-3 p-5">
        <span className="w-fit shrink-0 rounded-full px-3 py-1 text-xs font-medium text-gray-600">
          {category}
        </span>

        <h2 className="line-clamp-2 shrink-0 text-lg font-bold text-gray-900">
          {title}
        </h2>

        <p className="line-clamp-4 text-blue-950">{description}</p>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">${price}</span>

          <div className="flex items-center gap-1 text-sm text-gray-600">
            <span className="text-yellow-500">★</span>
            <span>{rate}</span>
            <span>({count})</span>
          </div>
        </div>

        <button
          type="button"
          className="mt-auto h-9 w-full shrink-0 rounded-lg bg-gray-900 font-medium text-white transition duration-300 hover:bg-blue-400 hover:text-black"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
