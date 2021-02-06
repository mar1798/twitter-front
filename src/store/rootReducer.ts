import {combineReducers} from "redux";
import {tweetsReducer} from "./ducks/tweets/tweets";
import {topicsReducer} from "./ducks/topics/topics";
import {tweetDataReducer} from "./ducks/tweet/tweet";

export const rootReducer = combineReducers({
    tweets: tweetsReducer,
    tweet: tweetDataReducer,
    topics: topicsReducer
})