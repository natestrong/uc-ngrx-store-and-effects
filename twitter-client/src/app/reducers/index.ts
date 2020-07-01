import {ActionReducerMap} from '@ngrx/store';
import {tweetReducer} from '../store/tweets/tweets.reducer';

export const reducers: ActionReducerMap<any> = {
  tweets: tweetReducer
};
