import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadAppTinhteComponent } from './download-app-tinhte.component';

describe('DownloadAppTinhteComponent', () => {
  let component: DownloadAppTinhteComponent;
  let fixture: ComponentFixture<DownloadAppTinhteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadAppTinhteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadAppTinhteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
