import React from "react";
import "../styles/Products.css"
import { useState, useEffect } from "react";
import GetProducts from "../api/GetProducts";

export default function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
      GetProducts().then(setProducts);
    }, []);
  

  return (
    <div className="products-grid">
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt=""/>
          <p className="product-title">{product.title}</p>
          <span className="product-price">${product.price}</span>
          <button className="addBtn"></button>
        </div>
      ))}
    </div>
  );
}
