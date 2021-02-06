import produce, {Draft} from 'immer';
import {TweetDataActions} from './actionCreators';
import { TweetDataActionsType } from './contracts/actionTypes';

import {LoadingState, TweetState} from './contracts/state';

const initialTweetDataState: TweetState = {
    data: undefined,
    loading: LoadingState.NEVER
};

export const tweetDataReducer = produce((draft: Draft<TweetState>, action: TweetDataActions) => {
    switch (action.type) {
        case TweetDataActionsType.SET_DATA:
            draft.data = action.payload;
            draft.loading = LoadingState.LOADED;
            break;

        case TweetDataActionsType.FETCH_DATA:
            draft.data = undefined;
            draft.loading = LoadingState.LOADING;
            break;

        case TweetDataActionsType.SET_LOADING:
            draft.loading = action.payload;
            break;

        default:
            break;
    }
}, initialTweetDataState);
