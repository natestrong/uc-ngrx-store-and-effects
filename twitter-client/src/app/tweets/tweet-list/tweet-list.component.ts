import {Component, OnInit} from '@angular/core';
import * as actions from '../../store/tweets/tweets.actions';
import * as fromTweets from '../../store/tweets/tweets.reducer';
import {Observable} from 'rxjs';
import {Tweet} from '../../store/tweets/tweet';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.scss']
})
export class TweetListComponent implements OnInit {

  tweets: Observable<Tweet[]>;

  constructor(private store: Store<fromTweets.State>) {
  }

  ngOnInit(): void {
    this.tweets = this.store.select(fromTweets.selectAll);
    this.store.dispatch(new actions.Query());
  }

  updateTweet(id, text): void {
    this.store.dispatch(new actions.Update(id, {text}));
  }

}
