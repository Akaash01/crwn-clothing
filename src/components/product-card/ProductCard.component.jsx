import './product-card.styles.scss';
import Button, { BUTTON_TYPE_CLASS } from '../button/button.component';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.component';
const Productcard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASS.inverted}
        onClick={addProductToCart}
      >
        Add To cart
      </Button>
    </div>
  );
};
export default Productcard;
