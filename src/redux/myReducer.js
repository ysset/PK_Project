import {FETCH_DATA_ERROR, FETCH_DATA_SUCCESS,} from './actions';
import photo from '../photo/imgonline-com-ua-Resize-pZFnDYxCz6cjI63.jpg'

const initialState = {
    data: [], // FROM FETCH

    count: [
        'https://sun1-18.userapi.com/c854124/v854124752/a4596/ChKUX6Q96OI.jpg',
        'https://sun1-18.userapi.com/c854124/v854124752/a4596/ChKUX6Q96OI.jpg',
        'https://sun1-18.userapi.com/c854124/v854124752/a4596/ChKUX6Q96OI.jpg',
        'https://sun1-18.userapi.com/c854124/v854124752/a4596/ChKUX6Q96OI.jpg',
        'https://sun1-18.userapi.com/c854124/v854124752/a4596/ChKUX6Q96OI.jpg',
        'https://sun1-18.userapi.com/c854124/v854124752/a4596/ChKUX6Q96OI.jpg',
        'https://sun1-18.userapi.com/c854124/v854124752/a4596/ChKUX6Q96OI.jpg',
        'https://sun1-18.userapi.com/c854124/v854124752/a4596/ChKUX6Q96OI.jpg',
        'https://sun1-18.userapi.com/c854124/v854124752/a4596/ChKUX6Q96OI.jpg',
        'https://sun1-18.userapi.com/c854124/v854124752/a4596/ChKUX6Q96OI.jpg',
    ],
    name: 'name',
    authors: [
        'Victor',
        'Victor',
        'Victor',
        'Victor',
        'Victor',
        'Victor',
    ],
    urAuthors: [
        'Andrei',
        'Andrei',
        'Andrei',
        'Andrei',
        'Andrei',
        'Andrei',
        'Andrei',
    ],
    views: 1500,
    img: 'https://sun1-18.userapi.com/c854124/v854124752/a4596/ChKUX6Q96OI.jpg',
    HotFeedImg: [
        photo,
        photo,
        photo,
        photo,
        photo,
        photo,
        photo,
        photo,
        photo,
        photo,
        photo,
        photo,
    ]
}

export default function myReducer(state = initialState, action) {

    switch (action.type) {

        case FETCH_DATA_SUCCESS:
            return {
                pending: false,
                data: action.data
            }

        case FETCH_DATA_ERROR:
            return {
                pending: false,
                error: action.error
            }

        default:
            return state;
    }
}

export const getState = state => state