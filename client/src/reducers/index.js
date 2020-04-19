import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import aboutReducer from "./aboutReducer";
import skillReducer from "./skillReducer"

export default combineReducers({
    auth: authReducer,
    about: aboutReducer,
    skill: skillReducer,
    errors: errorReducer
});