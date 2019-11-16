import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseasesHeaderComponent } from './diseases-header.component';

describe('DiseasesHeaderComponent', () => {
  let component: DiseasesHeaderComponent;
  let fixture: ComponentFixture<DiseasesHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiseasesHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiseasesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
