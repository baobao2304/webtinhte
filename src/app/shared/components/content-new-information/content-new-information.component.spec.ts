import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentNewInformationComponent } from './content-new-information.component';

describe('ContentNewInformationComponent', () => {
  let component: ContentNewInformationComponent;
  let fixture: ComponentFixture<ContentNewInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentNewInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentNewInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
