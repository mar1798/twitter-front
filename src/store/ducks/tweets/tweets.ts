import produce, {Draft} from 'immer';
import {TweetsActions, TweetsActionsType } from './contracts/actionTypes';
import {LoadingState, TweetsState} from './contracts/state';

const initialTweetsState: TweetsState = {
    items: [],
    addFormState: LoadingState.NEVER,
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

        case TweetsActionsType.ADD_TWEET:
            draft.items.splice(0, 0, action.payload);
            draft.addFormState = LoadingState.LOADED;
            break;

        case TweetsActionsType.FETCH_ADD_TWEET:
            draft.addFormState = LoadingState.LOADING;
            break;

        case TweetsActionsType.SET_ADD_FORM_STATE:
            draft.addFormState = action.payload
            break;

        default:
            break;
    }
}, initialTweetsState);
