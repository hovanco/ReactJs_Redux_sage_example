import { all } from 'redux-saga/effects';
import { watchProductsSaga } from './products/sagas'

export default function* rootSaga() {
  yield all([
    ...watchProductsSaga
  ]);
}