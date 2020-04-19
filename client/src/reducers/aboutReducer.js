import {
    GET_ABOUT,
    TOGGLE_ABOUT_LOADING
} from "../actions/types";

const initialState = {
    about: [],
    aboutLoading: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ABOUT:
            return {
                ...state,
                about: [...action.payload]
            };
        case TOGGLE_ABOUT_LOADING:
            return {
                ...state,
                aboutLoading: !state.aboutLoading
            };
        default:
            return state;
    }
}