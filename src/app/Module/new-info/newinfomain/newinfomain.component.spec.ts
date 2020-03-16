import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewinfomainComponent } from './newinfomain.component';

describe('NewinfomainComponent', () => {
  let component: NewinfomainComponent;
  let fixture: ComponentFixture<NewinfomainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewinfomainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewinfomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
