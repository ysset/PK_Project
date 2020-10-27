import {fetchDataError, fetchDataPending, fetchDataSuccess, fetchUserDataSuccess} from './actions';

function fetchData(whatFetch, options) {
    return dispatch => {
        dispatch(fetchDataPending())
        fetch(`https://pk.hitmarker.pro/api/${whatFetch}`, options)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw res.error;
                }
                dispatch(fetchDataSuccess(res));
                return res
            })
            .then(res => {
                if(res.user !== undefined) {
                    dispatch(fetchUserDataSuccess({
                        user: res.user,
                        authenticated: true,
                    }))
                }
                // authenticated: true,
                // user: res.user
            })
            .catch(error => {
                dispatch(fetchDataError(error));
            })
    }
}

export default fetchData;