import {Action} from "redux";
import {LoadingState, TweetState} from "./state";



export enum TweetDataActionsType {
    SET_DATA = 'tweet/SET_DATA',
    FETCH_DATA = 'tweet/FETCH_DATA',
    SET_LOADING = 'tweet/SET_LOADING'
}

export interface SetTweetDataActionInterface extends Action<TweetDataActionsType> {
    type: TweetDataActionsType.SET_DATA;
    payload: TweetState['data']
}

export interface SetTweetDataLoadingActionInterface extends Action<TweetDataActionsType> {
    type: TweetDataActionsType.SET_LOADING;
    payload: LoadingState
}

export interface FetchTweetDataActionInterface extends Action<TweetDataActionsType> {
    type: TweetDataActionsType.FETCH_DATA;
    payload: string
}

