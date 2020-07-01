import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {tweetReducer} from './tweets.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {AngularFireModule} from '@angular/fire';
import {firebaseConfig} from '../../../../fsConfig';
import {AngularFirestoreModule} from '@angular/fire/firestore';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    StoreModule.forFeature('tweets', tweetReducer),
  ],
})
// @ts-ignore
export class TweetsModule {}
