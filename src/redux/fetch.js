import {fetchDataError, fetchDataPending, fetchDataSuccess} from './actions';

function fetchData(whatFetch) {
    return dispatch => {
        dispatch(fetchDataPending())
        fetch(`https://pk.hitmarker.pro/api/${whatFetch}`)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw res.error;
                }
                dispatch(fetchDataSuccess(res));
                return res
            })
            .catch(error => {
                dispatch(fetchDataError(error));
            })
    }
}

export default fetchData;