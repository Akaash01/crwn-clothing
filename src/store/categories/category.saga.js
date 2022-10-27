import { takeLatest, call, all, put } from 'redux-saga/effects';
import { getCategoriesAndDocuments } from '../../utilities/firebase/firebase.util';
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed
} from './category.action';
import { CATEGORIES_ACTION_TYPES } from './category.types';
export function* fetchCategoriesAsync() {
  try {
    console.log('akaash');
    const categoryArray = yield call(getCategoriesAndDocuments);
    console.log({ categoryArray });
    yield put(fetchCategoriesSuccess(categoryArray));
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.SET_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]); // wait until all the things in the array are done
}
