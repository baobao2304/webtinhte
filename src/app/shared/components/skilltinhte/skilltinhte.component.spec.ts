import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkilltinhteComponent } from './skilltinhte.component';

describe('SkilltinhteComponent', () => {
  let component: SkilltinhteComponent;
  let fixture: ComponentFixture<SkilltinhteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkilltinhteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkilltinhteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
