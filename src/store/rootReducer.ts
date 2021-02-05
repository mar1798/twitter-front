import {combineReducers} from "redux";
import {tweetsReducer} from "./ducks/tweets/tweets";

export const rootReducer = combineReducers({
    tweets: tweetsReducer
})