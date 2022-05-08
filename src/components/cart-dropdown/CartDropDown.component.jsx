import Button from '../button/button.component';
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems
} from './cart-dropdown.styles.js';
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
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your Cart is empty </EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckOut}>Go to CheckOut</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
