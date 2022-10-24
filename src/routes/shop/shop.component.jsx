import './shop.styles.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/CategoriesPreview.component';
import Category from '../category/Category.component';
import { fetchCategoriesAsync } from '../../store/categories/category.action';
const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      dispatch(fetchCategoriesAsync());
    };
    getCategoriesMap();
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route exact path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
