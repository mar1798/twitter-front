import {LoadingState, TweetState} from "./contracts/state";
import {FetchTweetDataActionInterface, SetTweetDataActionInterface, SetTweetDataLoadingActionInterface, TweetDataActionsType} from "./contracts/actionTypes";



export const setTweetData = (payload: TweetState['data']): SetTweetDataActionInterface => ({
    type: TweetDataActionsType.SET_DATA,
    payload,
})

export const setTweetDataLoadingState = (payload: LoadingState): SetTweetDataLoadingActionInterface => ({
    type: TweetDataActionsType.SET_LOADING,
    payload,
})

export const fetchTweetData = (payload: string): FetchTweetDataActionInterface => ({
    type: TweetDataActionsType.FETCH_DATA,
    payload,
})

export type TweetDataActions =
    SetTweetDataActionInterface |
    FetchTweetDataActionInterface |
    SetTweetDataLoadingActionInterface;