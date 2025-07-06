import React from "react";
import { useParams } from "react-router-dom";
import { PruductsData } from "../Data/PruductsData";

function ProductsDetails() {
  const { id } = useParams();
  const product = PruductsData.find((p) => p.id.toString() === id);

  if (!product) return <p>Product not found.</p>;
  console.log(product);
  return (
    <div>
      <p>{id}</p>
      <img src={product.img} alt="" />
    </div>
  );
}

export default ProductsDetails;
