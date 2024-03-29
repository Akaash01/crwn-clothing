import {
  ShoppingIcon,
  CartIconContainer,
  ItemCount
} from './cart-icon.styles.js';
import {
  selectIsCartOpen,
  selectCartCount
} from '../../store/cart/cart.selector';
import { useDispatch, useSelector } from 'react-redux';
import { setIsCartOpen } from '../../store/cart/cart.action';
const CartIcon = () => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  const dispatch = useDispatch();
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
