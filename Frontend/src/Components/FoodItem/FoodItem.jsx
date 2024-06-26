import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreCntext";

// eslint-disable-next-line react/prop-types
const FoodItem = ({ id, name, description, image, price }) => {
  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);
  return (
    <div className="foodItem">
      <div className="foodItem-container">
        <img alt="" className="foodItem-image" src={url + "/images/" + image} />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>

      <div className="foodItem-info">
        <div className="foodItem-name">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>

        <p className="foodItem-desc">{description}</p>

        <p className="foodItem-price">Rs {price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
