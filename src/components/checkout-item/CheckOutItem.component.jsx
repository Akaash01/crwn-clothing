import './checkout-item.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.component';
const CheckOutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItemToCart, removeCartItem, clearItemFromCart } =
    useContext(CartContext);
  const incrementItem = () => addItemToCart(cartItem);
  const decrementItem = () => removeCartItem(cartItem);
  const clearItem = () => clearItemFromCart(cartItem);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decrementItem}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={incrementItem}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckOutItem;
