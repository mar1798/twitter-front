import {LoadingState, TopicsState} from "./contracts/state";
import {Action} from "redux";


export enum TopicActionsType {
    SET_TOPICS = 'topics/SET_TOPICS',
    FETCH_TOPICS = 'topics/FETCH_TOPICS',
    SET_LOADING = 'topics/SET_LOADING'
}

export interface SetTopicsActionInterface extends Action<TopicActionsType> {
    type: TopicActionsType.SET_TOPICS;
    payload: TopicsState['items']
}

export interface SetTopicsLoadingActionInterface extends Action<TopicActionsType> {
    type: TopicActionsType.SET_LOADING;
    payload: LoadingState
}

export interface FetchTopicsActionInterface extends Action<TopicActionsType> {
    type: TopicActionsType.FETCH_TOPICS;
}

export const setTopics = (payload: TopicsState['items']): SetTopicsActionInterface => ({
    type: TopicActionsType.SET_TOPICS,
    payload,
})

export const setTopicsLoadingState = (payload: LoadingState): SetTopicsLoadingActionInterface => ({
    type: TopicActionsType.SET_LOADING,
    payload,
})

export const fetchTopics = (): FetchTopicsActionInterface => ({
    type: TopicActionsType.FETCH_TOPICS,
})

export type TopicsActions =
    SetTopicsActionInterface |
    FetchTopicsActionInterface |
    SetTopicsLoadingActionInterface;