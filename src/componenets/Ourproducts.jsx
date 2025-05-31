import { useState } from "react";
import products from "../data";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import "./OurProducts.css"; // Your custom styles

const OurProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="products-section">
      <h2 className="products-title">Our Products</h2>

      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop
              autoPlay
              interval={3000}
              transitionTime={1000}
              className="carousel-wrapper"
            >
              {product.images.map((img, index) => (
                <div key={index} className="carousel-image-container">
                  <img
                    src={img}
                    alt={`${product.name} ${index + 1}`}
                    className="product-image"
                  />
                </div>
              ))}
            </Carousel>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.shortDescription}</p>
            <button onClick={() => setSelectedProduct(product)} className="read-more-btn">
              Read More
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setSelectedProduct(null)}>
              &times;
            </button>
            <h3 className="modal-title">{selectedProduct.name}</h3>
            <p className="modal-description">{selectedProduct.fullDescription}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurProducts;
