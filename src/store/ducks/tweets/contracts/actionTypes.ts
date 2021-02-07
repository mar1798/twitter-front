import {Action} from "redux";
import {LoadingState, Tweet, TweetsState} from "./state";

export enum TweetsActionsType {
    SET_TWEETS = 'tweets/SET_TWEETS',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',
    SET_LOADING = 'tweets/SET_LOADING',
    SET_ADD_FORM_STATE = 'tweets/SET_ADD_FORM_STATE',
    FETCH_ADD_TWEET = 'tweets/FETCH_ADD_TWEET',
    ADD_TWEET = 'tweets/ADD_TWEET'
}

export interface SetTweetsActionInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_TWEETS;
    payload: TweetsState['items']
}

export interface SetTweetsLoadingActionInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_LOADING;
    payload: LoadingState
}

export interface FetchAddTweetActionInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.FETCH_ADD_TWEET;
    payload: string
}

export interface AddTweetActionInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.ADD_TWEET;
    payload: Tweet
}

export interface SetAddFormStateActionInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_ADD_FORM_STATE;
    payload: LoadingState
}

export interface FetchTweetsActionInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.FETCH_TWEETS;
}

export type TweetsActions =
    SetTweetsActionInterface |
    FetchTweetsActionInterface |
    SetTweetsLoadingActionInterface|
    FetchAddTweetActionInterface|
    AddTweetActionInterface|
    SetAddFormStateActionInterface;