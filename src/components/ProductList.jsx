import { useState, useEffect } from "react";
import ProductFilter from "./ProductFilter";
import ProductCard from "./ProductCard";
import ProductDetails from "./ProductDetails";

export function ProductList() {
  const [products, setProducts] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);
  const [category, setCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchProducts()
      .then((products) => setProducts(products))
      .catch((error) => console.error(error));
  }, []);

  return (
    <main className="flex gap-6 p-6">
      {
        <>
          <ProductFilter
            minPrice={minPrice}
            setMinPrice={setMinPrice}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            category={category}
            setCategory={setCategory}
          />

          <section className="grid grid-cols-3 gap-5 flex-1">
            {products
              .filter(
                (product) =>
                  product.price >= Number(minPrice) &&
                  product.price <= Number(maxPrice),
              )
              .filter((product) =>
                category !== "" ? product.category === category : true,
              )
              .map((product) => (
                <ProductCard
                  {...product}
                  key={product.id}
                  setSelectedProduct={setSelectedProduct}
                />
              ))}
          </section>
        </>
      }

      {selectedProduct && <ProductDetails {...selectedProduct} products={products}/>}
    </main>
  );
}
export async function fetchProducts() {
  const response = await fetch("https://fakestoreapi.com/products");

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}
