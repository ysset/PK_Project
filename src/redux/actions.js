export const FETCH_HOT_FEED_DATA_SUCCESS = 'FETCH_HOT_FEED_DATA_SUCCESS';
export const FETCH_INTERESTING_DATA_SUCCESS = 'FETCH_INTERESTING_DATA_SUCCESS';
export const FETCH_THE_BEST_AUTHORS_DATA_SUCCESS = 'FETCH_THE_BEST_AUTHORS_DATA_SUCCESS';
export const FETCH_YOUR_AUTHORS_SUCCESS = 'FETCH_YOUR_AUTHORS_SUCCESS';
export const FETCH_DATA_ERROR = 'FETCH_PRODUCTS_ERROR';
export const FETCH_DATA_PENDING = 'FETCH_DATA_PENDING';
export const FETCH_USER_DATA = 'FETCH_DATA_PENDING';

export function fetchDataPending() {
    return {
        type: FETCH_DATA_PENDING
    }
}

export function fetchHotFeedDataSuccess(hotFeed) {
    return {
        type: FETCH_HOT_FEED_DATA_SUCCESS,
        hotFeed: hotFeed
    }
}
export function fetchInterestingDataSuccess(interesting) {
    return {
        type: FETCH_INTERESTING_DATA_SUCCESS,
        interesting: interesting
    }
}
export function fetchTheBestAuthorsDataSuccess(theBestAuthors) {
    return {
        type: FETCH_THE_BEST_AUTHORS_DATA_SUCCESS,
        theBestAuthors: theBestAuthors
    }
}
export function fetchYourAuthorsDataSuccess(yourAuthors) {
    console.log(yourAuthors)
    return {
        type: FETCH_YOUR_AUTHORS_SUCCESS,
        yourAuthors: yourAuthors
    }
}

export function fetchDataError(error) {
    return {
        type: FETCH_DATA_ERROR,
        error: error
    }
}
export function fetchUserDataSuccess(userData) {
    return {
        type: FETCH_USER_DATA,
        userData: userData
    }
}