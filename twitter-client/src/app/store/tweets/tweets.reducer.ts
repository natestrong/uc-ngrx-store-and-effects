import {createEntityAdapter, EntityState} from '@ngrx/entity';
import {Tweet} from './tweet';
import * as actions from './tweets.actions';
import {createFeatureSelector} from '@ngrx/store';

// EntityAdapter gives us helper methods to update the state consistently
export const tweetAdapter = createEntityAdapter<Tweet>();

export interface State extends EntityState<Tweet> {
}

const defaultTweet = {
  ids: ['123'],
  entities: {
    '123': {
      date: 123,
      hashtags: ['sweet', 'cool'],
      id_str: '1234',
      language: 'Python',
      text: 'This is my Tweet!',
      user_description: 'Cool guy',
      user_handle: 'MrCool'
    }
  }
};

// We can optionally give our state an initial state here
export const initialState: State = tweetAdapter.getInitialState(defaultTweet);



// Reducer
export function tweetReducer(
  state: State = initialState,
  action: actions.TweetsActions
): EntityState<Tweet> {
  switch (action.type) {
    case actions.ADDED:
      return tweetAdapter.addOne(action.payload, state);

    case actions.MODIFIED:
      return tweetAdapter.updateOne({
        id: action.payload.id_str,
        changes: action.payload
      }, state);

    case actions.REMOVED:
      return tweetAdapter.removeOne(action.payload.id_str, state);

    default:
      return state;
  }
}

// Create the default selectors
export const getTweetsState = createFeatureSelector<State>('tweets');

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = tweetAdapter.getSelectors(getTweetsState);
