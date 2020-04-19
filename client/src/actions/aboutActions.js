import axios from "axios";
import { GET_ABOUT, TOGGLE_ABOUT_LOADING } from "./types";
import { setErrors, clearErrors } from "./errorActions";

export const getAbout = () => dispatch => {
    dispatch(toggleAboutLoading());
    axios
        .get(`/api/abouts`)
        .then(res => {
            dispatch({
                type: GET_ABOUT,
                payload: res.data
            });
            dispatch(clearErrors());
            dispatch(toggleAboutLoading());
        })
        .catch(err => {
            dispatch(setErrors(err.response.data));
            dispatch(toggleAboutLoading());
        });
};

export const toggleAboutLoading = () => {
    return {
        type: TOGGLE_ABOUT_LOADING
    };
};