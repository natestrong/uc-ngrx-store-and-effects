import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {TweetsComponent} from './tweets/tweets.component';


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'tweets', component: TweetsComponent},
  {path: 'tweets/:id', component: TweetsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
