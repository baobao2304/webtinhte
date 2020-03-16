import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentHotPostsComponent } from './content-hot-posts.component';

describe('ContentHotPostsComponent', () => {
  let component: ContentHotPostsComponent;
  let fixture: ComponentFixture<ContentHotPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentHotPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentHotPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
