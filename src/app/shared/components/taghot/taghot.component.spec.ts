import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaghotComponent } from './taghot.component';

describe('TaghotComponent', () => {
  let component: TaghotComponent;
  let fixture: ComponentFixture<TaghotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaghotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaghotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
