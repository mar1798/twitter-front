export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
}


export interface Tweet {
    _id: number,
    text: String,
    user: {
        fullname: String,
        username: String,
        avatarUrl: String
    };
}

export interface TweetsState {
    items: Tweet[];
    loading: LoadingState;
}