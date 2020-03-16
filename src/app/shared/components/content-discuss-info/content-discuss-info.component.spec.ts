import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentDiscussInfoComponent } from './content-discuss-info.component';

describe('ContentDiscussInfoComponent', () => {
  let component: ContentDiscussInfoComponent;
  let fixture: ComponentFixture<ContentDiscussInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentDiscussInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentDiscussInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
