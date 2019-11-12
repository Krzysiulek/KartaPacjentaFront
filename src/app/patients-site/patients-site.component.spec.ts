import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsSiteComponent } from './patients-site.component';

describe('PatientsSiteComponent', () => {
  let component: PatientsSiteComponent;
  let fixture: ComponentFixture<PatientsSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientsSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
