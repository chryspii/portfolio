import {
    GET_EDUCATION,
    TOGGLE_EDUCATION_LOADING,
    GET_SKILL,
    TOGGLE_SKILL_LOADING,
    GET_WORK,
    TOGGLE_WORK_LOADING
} from "../actions/types";

const initialState = {
    skill: [],
    education: [],
    work: [],
    skillLoading: false,
    educationLoading: false,
    workLoading: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_SKILL:
            return {
                ...state,
                skill: [...action.payload]
            };
        case TOGGLE_SKILL_LOADING:
            return {
                ...state,
                skillLoading: !state.skillLoading
            };
        case GET_EDUCATION:
            return {
                ...state,
                education: [...action.payload]
            };
        case TOGGLE_EDUCATION_LOADING:
            return {
                ...state,
                educationLoading: !state.educationLoading
            };
        case GET_WORK:
            return {
                ...state,
                work: [...action.payload]
            };
        case TOGGLE_WORK_LOADING:
            return {
                ...state,
                workLoading: !state.workLoading
            };
        default:
            return state;
    }
}