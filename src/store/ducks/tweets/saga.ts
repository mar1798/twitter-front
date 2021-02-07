import {put, call, takeEvery} from 'redux-saga/effects'
import {
    setTweets,
    setTweetsLoadingState,
    addTweet, setAddFormState
} from "./actionCreators";
import {TweetsApi} from "../../../services/api/tweetsApi";
import {LoadingState, Tweet} from "./contracts/state";
import {FetchAddTweetActionInterface, TweetsActionsType } from './contracts/actionTypes';


export function* fetchTweetRequest() {
    try {
        const items = yield call(TweetsApi.fetchTweets);
        yield put(setTweets(items))
    } catch (error) {
        yield put(setTweetsLoadingState(LoadingState.ERROR))
    }
}

export function* fetchAddTweetRequest({payload}: FetchAddTweetActionInterface) {
    try {
        const data: Tweet = {
             _id: Math.random().toString(36).substr(2),
            text: payload,
            user: {
                fullname: "Test",
                username: "test",
                avatarUrl: 'http://source.unsplash.com/random/100x100?5'
            }
        };
        const item = yield call(TweetsApi.addTweet, data);
        yield put(addTweet(item))
    } catch (error) {
        yield put(setAddFormState(LoadingState.ERROR))
    }
}

export function* tweetsSaga() {
    yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetRequest);
    yield takeEvery(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest)
}