import './checkout.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.component';
import CheckOutItem from '../../components/checkout-item/CheckOutItem.component';
const CheckOut = () => {
  const { cartItems, addItemToCart, removeCartItem, cartTotal } =
    useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Qunatity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">Total : ${cartTotal} </span>
    </div>
  );
};

export default CheckOut;
