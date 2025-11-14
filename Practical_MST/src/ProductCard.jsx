import React from 'react';

function ProductCard({ name, price, description, inStock, image }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden w-72 flex flex-col items-center border border-gray-200 hover:shadow-2xl transition-shadow duration-200">
      <div className="w-full h-40 bg-gray-100 flex items-center justify-center">
        {image ? (
          <img src={image} alt={name} className="object-contain h-36" />
        ) : (
          <span className="text-gray-400 text-6xl">🛒</span>
        )}
      </div>
      <div className="p-5 w-full flex flex-col items-center">
        <h2 className="text-lg font-bold mb-1 text-center">{name}</h2>
        <p className="text-blue-600 font-semibold text-base mb-1">${price}</p>
        <p className="text-gray-600 text-sm mb-4 text-center">{description}</p>
        {inStock ? (
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow transition-colors duration-200">Buy Now</button>
        ) : (
          <span className="text-red-600 font-bold text-base">Out of Stock</span>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
