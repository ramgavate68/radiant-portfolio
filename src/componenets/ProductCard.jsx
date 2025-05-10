import React from 'react';

const ProductCard = ({ title, intro, benefits, imageUrls }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Image Gallery */}
        <div className="flex flex-wrap gap-2 p-4 justify-center items-center">
          {imageUrls?.map((url, idx) => (
            <img
              key={idx}
              src={url}
              alt={`${title} ${idx + 1}`}
              className="w-32 h-32 object-cover rounded-lg"
            />
          ))}
        </div>

        {/* Product Info */}
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="mb-2 text-gray-700">{intro}</p>
          {benefits && (
            <ul className="list-disc ml-6 text-sm text-gray-600">
              {benefits.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
