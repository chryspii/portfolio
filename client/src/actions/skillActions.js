import axios from "axios";
import { GET_EDUCATION, TOGGLE_EDUCATION_LOADING, GET_SKILL, TOGGLE_SKILL_LOADING, GET_WORK, TOGGLE_WORK_LOADING } from "./types";
import { setErrors, clearErrors } from "./errorActions";

export const getEducation = () => dispatch => {
    dispatch(toggleEducationLoading());
    axios
        .get(`/api/educations`)
        .then(res => {
            dispatch({
                type: GET_EDUCATION,
                payload: res.data
            });
            dispatch(clearErrors());
            dispatch(toggleEducationLoading());
        })
        .catch(err => {
            dispatch(setErrors(err.response.data));
            dispatch(toggleEducationLoading());
        });
};

export const toggleEducationLoading = () => {
    return {
        type: TOGGLE_EDUCATION_LOADING
    };
};

export const getWork = () => dispatch => {
    dispatch(toggleWorkLoading());
    axios
        .get(`/api/works`)
        .then(res => {
            dispatch({
                type: GET_WORK,
                payload: res.data
            });
            dispatch(clearErrors());
            dispatch(toggleWorkLoading());
        })
        .catch(err => {
            dispatch(setErrors(err.response.data));
            dispatch(toggleWorkLoading());
        });
};

export const toggleWorkLoading = () => {
    return {
        type: TOGGLE_WORK_LOADING
    };
};

export const getSkill = () => dispatch => {
    dispatch(toggleSkillLoading());
    axios
        .get(`/api/skills`)
        .then(res => {
            dispatch({
                type: GET_SKILL,
                payload: res.data
            });
            dispatch(clearErrors());
            dispatch(toggleSkillLoading());
        })
        .catch(err => {
            dispatch(setErrors(err.response.data));
            dispatch(toggleSkillLoading());
        });
};

export const toggleSkillLoading = () => {
    return {
        type: TOGGLE_SKILL_LOADING
    };
};