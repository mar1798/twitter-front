import {put, call, takeEvery} from 'redux-saga/effects'
import {setTopics, setTopicsLoadingState, TopicActionsType} from "./actionCreators";
import {TopicsApi} from "../../../services/api/topicsApi";
import {LoadingState} from "./contracts/state";

export function* fetchTopicRequest() {
    try {
        const items = yield call(TopicsApi.fetchTopics);
        yield put(setTopics(items))
    } catch (error) {
        yield put(setTopicsLoadingState(LoadingState.ERROR))
    }
}

export function* topicSaga() {
    yield takeEvery(TopicActionsType.FETCH_TOPICS, fetchTopicRequest)
}