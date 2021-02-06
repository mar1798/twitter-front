import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./rootReducer";
import createSagaMiddleWare from 'redux-saga'

import rootSaga from "./sagas";
import {TweetsState} from "./ducks/tweets/contracts/state";
import {TopicsState} from "./ducks/topics/contracts/state";
import {TweetState} from "./ducks/tweet/contracts/state";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const sagaMiddleWare = createSagaMiddleWare()

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export interface RootState {
    tweets: TweetsState;
    topics: TopicsState;
    tweet: TweetState
}


export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleWare)));

sagaMiddleWare.run(rootSaga)