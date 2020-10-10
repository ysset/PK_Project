export const FETCH_DATA_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_DATA_ERROR = 'FETCH_PRODUCTS_ERROR';
export const FETCH_DATA_PENDING = 'FETCH_DATA_PENDING';

export function fetchDataPending() {
    return {
        type: FETCH_DATA_PENDING
    }
}

export function fetchDataSuccess(data, whatFetch) {
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