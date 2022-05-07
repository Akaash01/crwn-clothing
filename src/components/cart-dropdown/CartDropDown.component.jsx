import Button from '../button/button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/CartItem.component';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.component';
import { useNavigate } from 'react-router-dom';
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckOut = () => {
    navigate('/checkout');
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckOut}>Go to CheckOut</Button>
    </div>
  );
};

export default CartDropdown;