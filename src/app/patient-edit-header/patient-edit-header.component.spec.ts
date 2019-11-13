import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientEditHeaderComponent } from './patient-edit-header.component';

describe('PatientEditHeaderComponent', () => {
  let component: PatientEditHeaderComponent;
  let fixture: ComponentFixture<PatientEditHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientEditHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientEditHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
