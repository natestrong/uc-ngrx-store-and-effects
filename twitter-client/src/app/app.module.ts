import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MetaReducer, StoreModule} from '@ngrx/store';
import {storeFreeze} from 'ngrx-store-freeze';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {environment} from '../environments/environment';
import {TweetListComponent} from './tweets/tweet-list/tweet-list.component';
import {TweetComponent} from './tweets/tweet-list/tweet/tweet.component';
import {TweetsComponent} from './tweets/tweets.component';
import {SelectedTweetComponent} from './tweets/selected-tweet/selected-tweet.component';
import {HomepageComponent} from './homepage/homepage.component';
import {AppMaterialModule} from './material/material.module';

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

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
    AppRoutingModule,
    AppMaterialModule,
    StoreModule.forRoot({}, {metaReducers}),
    EffectsModule.forRoot([]),
    environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
