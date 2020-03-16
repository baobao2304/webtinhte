import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSlideStoryComponent } from './content-slide-story.component';

describe('ContentSlideStoryComponent', () => {
  let component: ContentSlideStoryComponent;
  let fixture: ComponentFixture<ContentSlideStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentSlideStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSlideStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
