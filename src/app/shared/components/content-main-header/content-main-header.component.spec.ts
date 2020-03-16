import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentMainHeaderComponent } from './content-main-header.component';

describe('ContentMainHeaderComponent', () => {
  let component: ContentMainHeaderComponent;
  let fixture: ComponentFixture<ContentMainHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentMainHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentMainHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
