import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentInfoHotSystemComponent } from './content-info-hot-system.component';

describe('ContentInfoHotSystemComponent', () => {
  let component: ContentInfoHotSystemComponent;
  let fixture: ComponentFixture<ContentInfoHotSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentInfoHotSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentInfoHotSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
