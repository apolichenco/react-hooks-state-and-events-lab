import React, { useState } from "react";

function Item({ name, category }) {

  const [isShop, setIsShop]= useState()

  function addToCart() {
    setIsShop(!isShop)
  }

  const addedToCart = isShop ? "in-cart" : ""
  const shoppingCartButton = isShop ? "Remove From Cart" : "Add To Cart"
  const shoppingColor = isShop ? "remove" : "add"

  return (
    <li className={addedToCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={shoppingColor} onClick={addToCart}>{shoppingCartButton}</button>
    </li>
  );
}

export default Item;
