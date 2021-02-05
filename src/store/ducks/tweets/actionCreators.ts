import {LoadingState, TweetsState} from "./contracts/state";
import {Action} from "redux";


export enum TweetsActionsType {
    SET_TWEETS = 'tweets/SET_TWEETS',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',
    SET_LOADING = 'SET_LOADING'
}

export interface SetTweetsActionInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_TWEETS;
    payload: TweetsState['items']
}

export interface SetTweetsLoadingActionInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_LOADING;
    payload: LoadingState
}

export interface FetchTweetsActionInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.FETCH_TWEETS;
}

export const setTweets = (payload: TweetsState['items']): SetTweetsActionInterface => ({
    type: TweetsActionsType.SET_TWEETS,
    payload,
})

export const setTweetsLoadingState = (payload: LoadingState): SetTweetsLoadingActionInterface => ({
    type: TweetsActionsType.SET_LOADING,
    payload,
})

export const fetchTweets = (): FetchTweetsActionInterface => ({
    type: TweetsActionsType.FETCH_TWEETS,
})

export type TweetsActions =
    SetTweetsActionInterface |
    FetchTweetsActionInterface |
    SetTweetsLoadingActionInterface;