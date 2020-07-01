import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedTweetComponent } from './selected-tweet.component';

describe('SelectedTweetComponent', () => {
  let component: SelectedTweetComponent;
  let fixture: ComponentFixture<SelectedTweetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedTweetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
