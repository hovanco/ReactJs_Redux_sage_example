import * as Types from './types'

var initialState = {
  loading: false,
  data: [],
  error: ''
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_PRODUCTS_REQUEST:
      return {
        ...initialState,
        loading: true
      }
    case Types.FETCH_PRODUCTS_SUCCEEDED:
      return {
        ...initialState,
        data: action.payload.data,
        loading: false
      }
    case Types.FETCH_PRODUCTS_FAILED:
      return {
        ...initialState,
        error: action.payload.error,
        loading: false
      }
    default: return state;
  }
};

export default productsReducer;
