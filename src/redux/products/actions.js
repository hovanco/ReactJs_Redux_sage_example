import * as Types from './types'

export const fetchProducts = params => {
  return {
    type: Types.FETCH_PRODUCTS_REQUEST,
    payload: params
  }
}

export const fetchProductsSucceeded = params => {
  return {
    type: Types.FETCH_PRODUCTS_SUCCEEDED,
    payload: params
  }
}

export const fetchProductsFailed = params => {
  return {
    type: Types.FETCH_PRODUCTS_FAILED,
    payload: params
  }
}
