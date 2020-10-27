import {
    FETCH_DATA_ERROR,
    FETCH_DATA_PENDING,
    FETCH_INTERESTING_DATA_SUCCESS,
    FETCH_THE_BEST_AUTHORS_DATA_SUCCESS,
    FETCH_HOT_FEED_DATA_SUCCESS,
    FETCH_YOUR_AUTHORS_SUCCESS,
    FETCH_USER_DATA
} from './actions';

const initialState = {

    data: {
        theBestAuthors: [],
        hotFeed: [],
        yourAuthors: []
    },// From fetch

    pending: false,
    isAuth: false,
    userData: {},
    user: {}, //From fetch
    error: []
}

export default function myReducer(state = initialState, action) {
    switch (action.type) {

        case FETCH_DATA_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_INTERESTING_DATA_SUCCESS:
            return {
                ...state,
                data: {
                    ...state.data,
                    interesting: action.interesting
                }
            }
        case FETCH_THE_BEST_AUTHORS_DATA_SUCCESS:
            return {
                ...state,
                data: {
                    ...state.data,
                    theBestAuthors: action.theBestAuthors
                }
            }
        case FETCH_YOUR_AUTHORS_SUCCESS:
            console.log(action.yourAuthors)
            return {
                ...state,
                data: {
                    ...state.data,
                    yourAuthors: action.yourAuthors
                }
            }
        case FETCH_HOT_FEED_DATA_SUCCESS:
            return {
                ...state,
                data: {
                    ...state.data,
                    hotFeed: action.hotFeed
                }
            }
        case FETCH_DATA_ERROR:
            return {
                ...state,
                error: action.error
            }

        case FETCH_USER_DATA:
            console.log(action)
            return {
                ...state,
                userData: action.userData,
                isAuth: action.isAuth
            }
        default:
            return state;
    }
}

export const getState = state => state