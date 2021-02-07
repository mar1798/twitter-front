import {LoadingState, Tweet, TweetsState} from "./contracts/state";

import {
    AddTweetActionInterface,
    FetchAddTweetActionInterface,
    FetchTweetsActionInterface,
    SetAddFormStateActionInterface,
    SetTweetsActionInterface,
    SetTweetsLoadingActionInterface,
    TweetsActionsType
} from "./contracts/actionTypes";



export const setTweets = (payload: TweetsState['items']): SetTweetsActionInterface => ({
    type: TweetsActionsType.SET_TWEETS,
    payload,
})

export const fetchAddTweet = (payload: string): FetchAddTweetActionInterface => ({
    type: TweetsActionsType.FETCH_ADD_TWEET,
    payload,
})

export const setAddFormState = (payload: LoadingState): SetAddFormStateActionInterface => ({
    type: TweetsActionsType.SET_ADD_FORM_STATE,
    payload,
})

export const addTweet = (payload: Tweet): AddTweetActionInterface => ({
    type: TweetsActionsType.ADD_TWEET,
    payload,
})

export const setTweetsLoadingState = (payload: LoadingState): SetTweetsLoadingActionInterface => ({
    type: TweetsActionsType.SET_LOADING,
    payload,
})

export const fetchTweets = (): FetchTweetsActionInterface => ({
    type: TweetsActionsType.FETCH_TWEETS,
})

