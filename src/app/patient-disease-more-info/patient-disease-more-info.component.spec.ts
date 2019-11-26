import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDiseaseMoreInfoComponent } from './patient-disease-more-info.component';

describe('PatientDiseaseMoreInfoComponent', () => {
  let component: PatientDiseaseMoreInfoComponent;
  let fixture: ComponentFixture<PatientDiseaseMoreInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientDiseaseMoreInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDiseaseMoreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
