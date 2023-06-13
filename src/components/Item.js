import React, {useState} from "react";


function Item({ name, category }) {

  const [inCart, setInCart] = useState(false);
  const placeInCart = inCart ? "in-cart" : "";
  const buttonTxt = inCart ? "Remove from Cart" : "Add to Cart"

  function handleClick(){
    setInCart(inCart=>!inCart);
  }


  return (
    <li className={placeInCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{buttonTxt}</button>
    </li>
  );
}

export default Item;
