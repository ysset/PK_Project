import {FETCH_DATA_ERROR, FETCH_DATA_PENDING, FETCH_DATA_SUCCESS} from './actions';
import hotFeedPhoto from '../photo/imgonline-com-ua-Resize-pZFnDYxCz6cjI63.jpg'
import theBestAuthors from '../photo/imgonline-com-ua-Resize-9HJl3wB5C1WcXd0.jpg'

const initialState = {

    data: [],// FROM FETCH

    // interestingCardFeed: [
    //     {
    //         cover: 'https://sun1-18.userapi.com/c854124/v854124752/a4596/ChKUX6Q96OI.jpg',
    //         name: 'Something Goood',
    //     },
    //     {
    //         cover: 'https://sun1-18.userapi.com/c854124/v854124752/a4596/ChKUX6Q96OI.jpg',
    //         name: 'Something Goood',
    //     },
    //     {
    //         cover: 'https://sun1-18.userapi.com/c854124/v854124752/a4596/ChKUX6Q96OI.jpg',
    //         name: 'Something Goood',
    //     },
    //     {
    //         cover: 'https://sun1-18.userapi.com/c854124/v854124752/a4596/ChKUX6Q96OI.jpg',
    //         name: 'Something Goood',
    //     },
    //     {
    //         cover: 'https://sun1-18.userapi.com/c854124/v854124752/a4596/ChKUX6Q96OI.jpg',
    //         name: 'Something Goood',
    //     },
    //     {
    //         cover: 'https://sun1-18.userapi.com/c854124/v854124752/a4596/ChKUX6Q96OI.jpg',
    //         name: 'Something Goood',
    //     },
    //     {
    //         cover: 'https://sun1-18.userapi.com/c854124/v854124752/a4596/ChKUX6Q96OI.jpg',
    //         name: 'Something Goood',
    //     },
    //     {
    //         cover: 'https://sun1-18.userapi.com/c854124/v854124752/a4596/ChKUX6Q96OI.jpg',
    //         name: 'Something Goood',
    //     },
    //     {
    //         cover: 'https://sun1-18.userapi.com/c854124/v854124752/a4596/ChKUX6Q96OI.jpg',
    //         name: 'Something Goood',
    //     },
    //     {
    //         cover: 'https://sun1-18.userapi.com/c854124/v854124752/a4596/ChKUX6Q96OI.jpg',
    //         name: 'Something Goood',
    //     },
    // ],
    TheBestAuthors: [

        {
            author: 'Victor',
            cover: theBestAuthors,
        },
        {
            author: 'Victor',
            cover: theBestAuthors,
        },
        {
            author: 'Victor',
            cover: theBestAuthors,
        },
        {
            author: 'Victor',
            cover: theBestAuthors,
        },
        {
            author: 'Victor',
            cover: theBestAuthors,
        },
        {
            author: 'Victor',
            cover: theBestAuthors,
        },
        {
            author: 'Victor',
            cover: theBestAuthors,
        },
    ],
    // urAuthors: [
    //
    //     {
    //         author: 'Andrei',
    //         cover: theBestAuthors,
    //     },
    //     {
    //         author: 'Andrei',
    //         cover: theBestAuthors,
    //     },
    //     {
    //         author: 'Andrei',
    //         cover: theBestAuthors,
    //     },
    //     {
    //         author: 'Andrei',
    //         cover: theBestAuthors,
    //     },
    //     {
    //         author: 'Andrei',
    //         cover: theBestAuthors,
    //     },
    //     {
    //         author: 'Andrei',
    //         cover: theBestAuthors,
    //     },
    //     {
    //         author: 'Andrei',
    //         cover: theBestAuthors,
    //     },
    // ],
    // HotFeed: [
    //     {
    //         massage: 'Fuck Text',
    //         cover: hotFeedPhoto,
    //     },
    //     {
    //         massage: 'Fuck Text',
    //         cover: hotFeedPhoto,
    //     },
    //     {
    //         massage: 'Fuck Text',
    //         cover: hotFeedPhoto,
    //     },
    //     {
    //         massage: 'Fuck Text',
    //         cover: hotFeedPhoto,
    //     },
    //     {
    //         massage: 'Fuck Text',
    //         cover: hotFeedPhoto,
    //     },
    //     {
    //         massage: 'Fuck Text',
    //         cover: hotFeedPhoto,
    //     },
    //     {
    //         massage: 'Fuck Text',
    //         cover: hotFeedPhoto,
    //     },
    //     {
    //         massage: 'Fuck Text',
    //         cover: hotFeedPhoto,
    //     },
    //     {
    //         massage: 'Fuck Text',
    //         cover: hotFeedPhoto,
    //     },
    //     {
    //         massage: 'Fuck Text',
    //         cover: hotFeedPhoto,
    //     },
    //     {
    //         massage: 'Fuck Text',
    //         cover: hotFeedPhoto,
    //     },
    //     {
    //         massage: 'Fuck Text',
    //         cover: hotFeedPhoto,
    //     },
    // ],
    pending: false,
    isAuth: false,
    user:{},
    error: [],
}

export default function myReducer(state = initialState, action) {
    switch (action.type) {

        case FETCH_DATA_PENDING:
            return {
                ...state,
                pending: true
            }

        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                ...state.data,
                data: state.data.concat(action.data),
            }

        case FETCH_DATA_ERROR:
            return {
                ...state,
                error: action.error
            }

        default:
            return state;
    }
}

export const getState = state => state