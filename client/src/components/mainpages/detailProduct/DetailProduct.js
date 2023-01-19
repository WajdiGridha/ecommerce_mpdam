import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalState } from "../../../GlobalState";
import ProductItem from "../utils/productItem/ProductItem";

function DetailProduct() {
  const params = useParams();
  const state = useContext(GlobalState);
  const [products] = state.productsAPI.products;

  const [detailProduct, setDetailProduct] = useState([]);

  useEffect(() => {
    if (params.id) {
      products.forEach((product) => {
        if (product._id === params.id) setDetailProduct(product);
      });
    }
  }, [params.id, products]);

  if (detailProduct.length === 0) return null;

  return (
    <>
      <div className="container">
        <div className="detail">
          <img src={detailProduct.images.url} alt="" />
          <div className="right-column">
            <div className="box-detail">
              <div className="row">
                <h2>{detailProduct.title}</h2>
                <h6>#id: {detailProduct.product_id}</h6>
              </div>
              <span className="product-price">TND {detailProduct.price}</span>
              <p className="product-description">{detailProduct.description}</p>
              <p>{detailProduct.content}</p>
              <p>Sold: {detailProduct.sold}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 style={{ textAlign: "center" }}>Related products</h1>
        <div className="products">
          {products.map((product) => {
            return product.category === detailProduct.category ? (
              <ProductItem key={product._id} product={product} />
            ) : null;
          })}
        </div>
      </div>
    </>
  );
}

export default DetailProduct;