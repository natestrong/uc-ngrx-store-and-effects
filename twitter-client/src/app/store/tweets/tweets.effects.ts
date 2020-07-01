import * as tweetsActions from './tweets.actions';
import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AngularFirestore} from '@angular/fire/firestore';
import {from, Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {map, mergeMap, switchMap} from 'rxjs/operators';
import {Tweet} from './tweet';

// @ts-ignore @Injectable()
export class TweetsEffects {
  constructor(
    private actions$: Actions,
    private afs: AngularFirestore
  ) {
  }

  // @ts-ignore
  @Effect() query$: Observable<Action> = this.actions$.pipe(
    ofType(tweetsActions.QUERY),
    switchMap(action => {
      console.log(action);
      return this.afs.collection<Tweet>('tweets').stateChanges();
    }),
    mergeMap(actions => actions),
    map(action => {
      return {
        type: `[Tweet] ${action.type}`,
        payload: {
          ...action.payload.doc.data(),
          id: action.payload.doc.id
        }
      };
    })
  );

  // @ts-ignore
  @Effect() update$: Observable<Action> = this.actions$.pipe(
    ofType(tweetsActions.UPDATE),
    map((action: tweetsActions.Update) => action),
    switchMap(data => {
      const ref = this.afs.doc<Tweet>(`tweets/${data.id}`);
      return from(ref.update(data.changes));
    }),
    map(() => new tweetsActions.Success())
  );
}
