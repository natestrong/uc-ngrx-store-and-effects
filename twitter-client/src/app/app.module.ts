import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TweetListComponent} from './tweets/tweet-list/tweet-list.component';
import {TweetComponent} from './tweets/tweet-list/tweet/tweet.component';
import {TweetsComponent} from './tweets/tweets.component';
import {SelectedTweetComponent} from './tweets/selected-tweet/selected-tweet.component';
import {HomepageComponent} from './homepage/homepage.component';
import {AppMaterialModule} from './material/material.module';
import {TweetsModule} from './store/tweets/tweets.module';
import {StoreModule} from '@ngrx/store';
import {reducers} from './reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    TweetListComponent,
    TweetComponent,
    TweetsComponent,
    SelectedTweetComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule,
    AppMaterialModule,
    TweetsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({maxAge: 25})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
