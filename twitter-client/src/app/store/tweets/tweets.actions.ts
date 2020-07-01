import {Action} from '@ngrx/store';
import {Tweet} from './tweet';

export const QUERY = '[Tweets] query tweets';
export const ADDED = '[Tweets] added';
export const MODIFIED = '[Tweets] modified';
export const REMOVED = '[Tweets] removed';
export const UPDATE = '[Tweets] update';
export const SUCCESS = '[Tweets] update success';

export class Query implements Action {
  readonly type = QUERY;

  constructor() {
  }
}

export class Added implements Action {
  readonly type = ADDED;

  constructor(public payload: Tweet) {
  }
}

export class Modified implements Action {
  readonly type = MODIFIED;

  constructor(public payload: Tweet) {
  }
}

export class Removed implements Action {
  readonly type = REMOVED;

  constructor(public payload: Tweet) {
  }
}

export class Update implements Action {
  readonly type = UPDATE;

  constructor(
    public id: string,
    public changes: Partial<Tweet>
  ) {
  }
}

export class Success implements Action {
  readonly type = SUCCESS;

  constructor() {
  }
}

export type TweetsActions =
  Query |
  Added |
  Modified |
  Removed |
  Update |
  Success;
