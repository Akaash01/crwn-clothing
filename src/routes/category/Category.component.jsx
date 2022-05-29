import { useContext, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Productcard from '../../components/product-card/ProductCard.component';
import './category.styles.scss';
import { selectCategoriesMap } from '../../store/categories/category.selector';
const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState([]);
  console.log('hello');
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>

      <div className="category-container">
        {products &&
          products.map((product) => (
            <Productcard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Category;
