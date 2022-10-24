import { getCategoriesAndDocuments } from '../../utilities/firebase/firebase.util';
import { createAction } from '../../utilities/reducer.utils';
import { CATEGORIES_ACTION_TYPES } from './category.types';
export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_START);
export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_SUCCESS, categoriesArray);
export const fetchCategoriesFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_FAILED, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    const categoryArray = await getCategoriesAndDocuments();
    dispatch(fetchCategoriesSuccess(categoryArray));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
};
