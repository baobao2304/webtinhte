import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestroutingComponent } from './testrouting.component';

describe('TestroutingComponent', () => {
  let component: TestroutingComponent;
  let fixture: ComponentFixture<TestroutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestroutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestroutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
