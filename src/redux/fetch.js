import {fetchDataError, fetchDataSuccess, fetchDataPending} from './actions';

function fetchData(whatFetch) {
    return dispatch => {
        dispatch(fetchDataPending())
        fetch(`http://localhost:5000/cards/${whatFetch}`)
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