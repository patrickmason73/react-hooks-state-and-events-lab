import React, {useState} from "react";



function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(false)
  function handleCart() {
    setIsInCart(!isInCart)
  }
  const cartClass = isInCart ? "in-cart" : ""
  const cartState = isInCart ? "Remove From Cart" : "Add to Cart"

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCart} className="add">{cartState}</button>
    </li>
  );
}

export default Item;
