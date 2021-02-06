import {all} from 'redux-saga/effects'
import {tweetsSaga} from "./ducks/tweets/saga";
import {topicSaga} from "./ducks/topics/saga";
import {tweetDataSaga} from "./ducks/tweet/saga";

export default function* rootSaga() {
    yield all([
        tweetsSaga(),
        topicSaga(),
        tweetDataSaga()
    ])
}