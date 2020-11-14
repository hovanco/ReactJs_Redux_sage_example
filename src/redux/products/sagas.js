import { takeLatest, put } from 'redux-saga/effects'
import * as Types from './types'
import * as Actions from './actions'
import callApi from '../../utils/apiCaller'

function* fetchProductsAsync() {
  try {
    const response = yield callApi('hosts')
    yield put(Actions.fetchProductsSucceeded({ data: response.data.data }))
  } catch (error) {
    yield put(Actions.fetchProductsFailed({ error: error?.message || 'Có lỗi xảy ra, vui lòng thử lại!' }))
  }
}

export const watchProductsSaga = [
  takeLatest(Types.FETCH_PRODUCTS_REQUEST, fetchProductsAsync)
]