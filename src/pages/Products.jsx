/* eslint-disable react/prop-types */
import ProductGrid from "@/components/ProductGrid";
import ProductGrids from "@/components/ProductGrids";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <h3>Products: {products.length || 0}</h3>
      <ProductGrids>
        {!products.length ? (
          <div>loading...</div>
        ) : (
          <div className="grid grid-cols-2">
            {products.map((item) => (
              <ProductGrid key={item.id} item={item} />
            ))}
          </div>
        )}
      </ProductGrids>
    </div>
  );
}
