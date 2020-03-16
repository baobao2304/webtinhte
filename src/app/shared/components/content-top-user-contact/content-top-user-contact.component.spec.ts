import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTopUserContactComponent } from './content-top-user-contact.component';

describe('ContentTopUserContactComponent', () => {
  let component: ContentTopUserContactComponent;
  let fixture: ComponentFixture<ContentTopUserContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentTopUserContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTopUserContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
