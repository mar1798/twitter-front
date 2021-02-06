import { RootState } from '../../store';
import { LoadingState, TweetState } from './contracts/state';

export const selectTweetData = (state: RootState): TweetState => state.tweet;

export const selectLoadingState = (state: RootState): LoadingState =>
    selectTweetData(state).loading;

export const selectIsTweetDataLoading = (state: RootState): boolean =>
    selectLoadingState(state) === LoadingState.LOADING;

export const selectIsTweetDataLoaded = (state: RootState): boolean =>
    selectLoadingState(state) === LoadingState.LOADED;

export const selectTweetDataItems = (state: RootState): TweetState['data'] => selectTweetData(state).data
