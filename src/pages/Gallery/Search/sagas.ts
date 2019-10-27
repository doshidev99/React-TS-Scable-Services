import { all, call, put, debounce } from 'redux-saga/effects';

import { GALLERY_REQUEST } from './constants';
import { gallerySuccess, galleryFail } from './actions';
import { searchServiceByGiphy } from '../../../services';
import { ImageResponse } from '../types';

export function* fetchGallerySaga(action: any) {
  try {
    const {
      payload: { value, offset, isNewFetch },
    } = action;
    const { data }: any = yield call(
      [searchServiceByGiphy, searchServiceByGiphy.getImages],
      { value, offset },
    );
    yield put(gallerySuccess({ result: data, isNewFetch }));
  } catch (err) {
    yield put(galleryFail(err));
  }
}

export default function* root() {
  yield all([debounce(100, GALLERY_REQUEST, fetchGallerySaga)]);
}