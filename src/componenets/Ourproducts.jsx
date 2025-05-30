// src/components/OurProducts.jsx
import React, { useState, useEffect } from "react";
import {products} from "../common.service"


const OurProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  // Auto slide images every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev =>
        products.reduce((acc, product) => {
          const nextIndex = ((prev[product.id] || 0) + 1) % product.images.length;
          return { ...acc, [product.id]: nextIndex };
        }, {})
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
   <section className="font-[Poppins] px-4 py-10 bg-white text-gray-800" style={{color: "#333", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
  <h2 className="text-3xl font-bold text-center mb-10">Our Products</h2>

  {/* Centered container with max width */}
  <div className="max-w-7xl mx-auto">
    <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(280px,1fr))] justify-center">
      {products.map(product => (
        <div
          key={product.id}
          className="bg-transparent rounded-2xl border shadow-lg p-4 max-w-sm w-full mx-auto"
        >
          <div className="w-full h-48 rounded-2xl overflow-hidden">
            <img
              src={product.images[currentImageIndex[product.id] || 0]}
              alt={product.name}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
          <p className="mt-2 text-sm text-gray-700 line-clamp-3">
            {product.shortDescription}
          </p>
          <button
            onClick={() => setSelectedProduct(product)}
            className="mt-4 text-blue-600 hover:underline"
          >
            Read More
          </button>
        </div>
      ))}
    </div>
  </div>

  {/* Modal */}
  {selectedProduct && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white text-black rounded-2xl p-6 max-w-md w-full relative">
        <button
          className="absolute top-2 right-4 text-2xl"
          onClick={() => setSelectedProduct(null)}
        >
          &times;
        </button>
        <h3 className="text-2xl font-bold mb-4">{selectedProduct.name}</h3>
        <p>{selectedProduct.fullDescription}</p>
      </div>
    </div>
  )}
</section>

  );
};

export default OurProducts;
