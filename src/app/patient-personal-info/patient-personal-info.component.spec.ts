import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientPersonalInfoComponent } from './patient-personal-info.component';

describe('PatientPersonalInfoComponent', () => {
  let component: PatientPersonalInfoComponent;
  let fixture: ComponentFixture<PatientPersonalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientPersonalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientPersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
