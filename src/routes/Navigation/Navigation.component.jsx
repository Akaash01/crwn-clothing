import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { signOutUser } from '../../utilities/firebase/firebase.util';
import {
  NavigationContainer,
  NavLink,
  NavLinksContainer,
  LogoContainer
} from './navigation.styles.jsx';
import CartIcon from '../../components/cart-icon/CartIcon.component';
import CartDropdown from '../../components/cart-dropdown/CartDropDown.component';
import { UserContext } from '../../context/user.context';
import { CartContext, CartProvider } from '../../context/cart.component';
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  console.log('Nav', currentUser);
  const signOutHandler = async () => {
    const res = await signOutUser();
  };
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">Shop</NavLink>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              {' '}
              SIGN OUT{' '}
            </span>
          ) : (
            <NavLink to="/auth">Signin</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};
export default Navigation;
