import produce, {Draft} from 'immer';
import {TopicsActions, TopicActionsType} from './actionCreators';
import {LoadingState, TopicsState} from './contracts/state';

const initialTopicsState: TopicsState = {
    items: [],
    loading: LoadingState.NEVER
};

export const topicsReducer = produce((draft: Draft<TopicsState>, action: TopicsActions) => {
    switch (action.type) {
        case TopicActionsType.SET_TOPICS:
            draft.items = action.payload;
            draft.loading = LoadingState.LOADED;
            break;

        case TopicActionsType.FETCH_TOPICS:
            draft.items = [];
            draft.loading = LoadingState.LOADING;
            break;

        case TopicActionsType.SET_LOADING:
            draft.loading = action.payload;
            break;

        default:
            break;
    }
}, initialTopicsState);
