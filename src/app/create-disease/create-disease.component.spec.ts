import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDiseaseComponent } from './create-disease.component';

describe('CreateDiseaseComponent', () => {
  let component: CreateDiseaseComponent;
  let fixture: ComponentFixture<CreateDiseaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDiseaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDiseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
