import {put, call, takeEvery} from 'redux-saga/effects'
import {setTweetData, setTweetDataLoadingState} from "./actionCreators";
import {TweetsApi} from "../../../services/api/tweetsApi";
import {LoadingState} from "./contracts/state";
import {FetchTweetDataActionInterface, TweetDataActionsType} from "./contracts/actionTypes";

export function* fetchTweetDataRequest({payload: tweetId}: FetchTweetDataActionInterface) {
    try {
        const data = yield call(TweetsApi.fetchTweetData, tweetId);
        yield put(setTweetData(data[0]))
    } catch (error) {
        alert(error)
        yield put(setTweetDataLoadingState(LoadingState.ERROR))
    }
}

export function* tweetDataSaga() {
    yield takeEvery(TweetDataActionsType.FETCH_DATA, fetchTweetDataRequest)
}