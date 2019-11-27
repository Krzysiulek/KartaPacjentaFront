import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullMedicalDocumentationComponent } from './full-medical-documentation.component';

describe('FullMedicalDocumentationComponent', () => {
  let component: FullMedicalDocumentationComponent;
  let fixture: ComponentFixture<FullMedicalDocumentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullMedicalDocumentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullMedicalDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
