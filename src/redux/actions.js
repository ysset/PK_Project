export const FETCH_DATA_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_DATA_ERROR = 'FETCH_PRODUCTS_ERROR';

export function fetchDataSuccess(data) {
    return {
        type: FETCH_DATA_SUCCESS,
        data: data
    }
}

export function fetchDataError(error) {
    return {
        type: FETCH_DATA_ERROR,
        error: error
    }
}