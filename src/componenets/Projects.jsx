import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const ProductCard = ({ product }) => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 1,
      spacing: 8,
    },
  });

  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden">
      <div ref={sliderRef} className="keen-slider h-64">
        {product?.images.map((img, index) => (
          <div key={index} className="keen-slider__slide">
            <img
              src={img}
              alt={`Slide ${index}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{product?.title}</h3>
        <p className="text-sm text-gray-600">{product?.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
