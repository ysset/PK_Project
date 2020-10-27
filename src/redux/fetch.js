import {
    fetchDataError,
    fetchDataPending,
    fetchHotFeedDataSuccess,
    fetchInterestingDataSuccess,
    fetchTheBestAuthorsDataSuccess,
    fetchUserDataSuccess,
    fetchYourAuthorsDataSuccess
} from './actions';

function fetchData(whatFetch, options) {
    return dispatch => {
        dispatch(fetchDataPending())
        fetch(`https://pk.hitmarker.pro/api/${whatFetch}`, options)
            .then(res => res.json())
            .then(res => {
                if (res.hotFeed !== undefined) dispatch(fetchHotFeedDataSuccess(res.hotFeed));
                if (res.interesting !== undefined) dispatch(fetchInterestingDataSuccess(res.interesting));
                if (res.theBestAuthors !== undefined) dispatch(fetchTheBestAuthorsDataSuccess(res.theBestAuthors));
                if (res.yourAuthor !== undefined) dispatch(fetchYourAuthorsDataSuccess(res.yourAuthor));
                if (res.user !== undefined) {
                    console.log("User data: ", res.user)
                    dispatch(fetchUserDataSuccess(res.user,true))
                }
                return res;
            })
            .catch(error => {
                dispatch(fetchDataError(error));
            })
    }
}
export default fetchData;