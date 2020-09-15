import {
    FETCH_DATA_ERROR,
    FETCH_DATA_SUCCESS,
} from './actions';

const initialState = {
    data: [], // FROM FETCH
}

export default function myReducer(state = initialState, action) {

    // eslint-disable-next-line default-case
    switch (action.type) {

        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data
            }

        case FETCH_DATA_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
    }
}
export const getState = state => state