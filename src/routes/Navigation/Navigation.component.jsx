import { useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
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
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutHandler = async () => {
    const res = await signOutUser();
  };
  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);
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
