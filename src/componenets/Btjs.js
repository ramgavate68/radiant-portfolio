// src/components/OurProductsBootstrap.jsx
import React, { useState } from "react";
import { products } from "../data/productData";
import { Modal, Button } from "react-bootstrap";

const OurProductsBootstrap = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="py-5 px-3 bg-white text-dark">
      <div className="text-center mb-4">
        <h2 className="fw-bold">Our Products</h2>
      </div>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-12 col-md-4 mb-4">
            <div
              className="card h-100 shadow border-0 rounded-4"
              style={{ backgroundColor: "transparent" }}
            >
              <div id={`carousel${product.id}`} className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner rounded-4">
                  {product.images.map((img, idx) => (
                    <div key={idx} className={`carousel-item ${idx === 0 ? "active" : ""}`}>
                      <img
                        src={img}
                        className="d-block w-100"
                        alt={`slide-${idx}`}
                        style={{ borderRadius: "1rem", height: "200px", objectFit: "cover" }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title fw-semibold">{product.name}</h5>
                <p className="card-text text-truncate" style={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  {product.shortDescription}
                </p>
                <Button variant="link" className="px-0" onClick={() => setSelectedProduct(product)}>
                  Read More
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bootstrap Modal */}
      {selectedProduct && (
        <Modal show={true} onHide={() => setSelectedProduct(null)} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{selectedProduct.fullDescription}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setSelectedProduct(null)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </section>
  );
};

export default OurProductsBootstrap;
