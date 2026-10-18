function ProductDetails({
  title,
  price,
  description,
  category,
  image,
  rating,
  setSelectedProduct,
  products,
}) {
  const { rate, count } = rating;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg max-h-[90vh] overflow-y-auto">
        <div className="mb-5 flex justify-end">
          <button
            className="text-gray-500 hover:text-black"
            onClick={(event) => setSelectedProduct(null)}
          >
            ✕
          </button>
        </div>

        <img
          src={image}
          alt="Backpack"
          className="mx-auto mb-6 h-48 object-contain"
        />

        <h2 className="mb-3 text-xl font-bold">{title}</h2>

        <p className="mb-4 text-sm leading-6 text-gray-600">{description}</p>

        <div className="flex items-center justify-between mb-4">
          <p className="text-xl font-semibold">${price}</p>
          <div>
            <span className="text-yellow-500">★</span>
            <span className="mr-2.5">{rate}</span>
            <span>({count})</span>
          </div>
        </div>

        <p className="mb-2 text-sm text-gray-500">{category}</p>

        <div className="mt-6 border-t border-gray-200 pt-4">
          <h3 className="mb-3 text-lg font-semibold">Similar products</h3>

          <div className="flex gap-4 overflow-x-auto">
            {products
              .filter((product) => product.category === category && product.title !== title)
              .map((product) => (
                <div key={product.id} className="rounded border border-gray-200 p-3">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="mb-2 h-16 w-full object-contain"
                  />
                  <p className="text-sm line-clamp-2">{product.title}</p>
                  <p className="mt-1 text-sm font-medium">${product.price}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
