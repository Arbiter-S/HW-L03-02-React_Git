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
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const cachedProducts = localStorage.getItem("products");

    if (cachedProducts) {
      setProducts(JSON.parse(cachedProducts));
      return;
    }

    fetchProducts()
      .then((products) => {
        setProducts(products);
        localStorage.setItem("products", JSON.stringify(products));
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(search);
    }, 200);

    return () => clearTimeout(timeout);
  }, [search]);

  return (
    <main className="flex gap-6 p-6">
      <ProductFilter
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        category={category}
        setCategory={setCategory}
        search={search}
        setSearch={setSearch}
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
          .filter((product) =>
            product.title.toLowerCase().includes(debouncedSearch.toLowerCase()),
          )
          .map((product) => (
            <ProductCard
              {...product}
              key={product.id}
              setSelectedProduct={setSelectedProduct}
            />
          ))}
      </section>

      {selectedProduct && (
        <ProductDetails {...selectedProduct} products={products} />
      )}
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
