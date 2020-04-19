import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import postReducer from "./postReducer";
import aboutReducer from "./aboutReducer";
import skillReducer from "./skillReducer"

export default combineReducers({
    auth: authReducer,
    post: postReducer,
    about: aboutReducer,
    skill: skillReducer,
    errors: errorReducer
});