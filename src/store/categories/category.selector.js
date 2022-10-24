import { createSelector } from 'reselect';
const selectCategoriesReducer = (state) => state.categories;

const selectCategories = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => {
    console.log('selector fired');
    return categoriesSlice.categories;
  }
);
export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      console.log('hello');
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

export const selectIsCategoriesLoding = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
