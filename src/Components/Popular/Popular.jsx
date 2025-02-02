import React from "react";
import "./Popular.css";
import data_product from "../Assets/data";

import Item from "../Item/Item";

const Popular = () => {
  return (
    <div className="popular">
      <h1>POPULAR PRODUCTS</h1>
      <hr />
      <div className="popular-item"> </div>
      {data_product.map((product, i) => {
        return (
          <Item
            key={i}
            id={product.id}
            name={product.name}
            image={product.image}
            new_price={product.new_price}
            old_price={product.old_price}
          />
        );
      })}
    </div>
  );
};

export default Popular;
