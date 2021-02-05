import produce, {Draft} from 'immer';
import {TweetsActions, TweetsActionsType} from './actionCreators';
import {LoadingState, TweetsState} from './contracts/state';

const initialTweetsState: TweetsState = {
    items: [],
    loading: LoadingState.NEVER
};

export const tweetsReducer = produce((draft: Draft<TweetsState>, action: TweetsActions) => {
    switch (action.type) {
        case TweetsActionsType.SET_TWEETS:
            draft.items = action.payload;
            draft.loading = LoadingState.LOADED;
            break;

        case TweetsActionsType.FETCH_TWEETS:
            draft.items = [];
            draft.loading = LoadingState.LOADING;
            break;

        case TweetsActionsType.SET_LOADING:
            draft.loading = action.payload;
            break;

        default:
            break;
    }
}, initialTweetsState);
