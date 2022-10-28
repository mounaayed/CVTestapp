import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceproffesionelleComponent } from './experienceproffesionelle.component';

describe('ExperienceproffesionelleComponent', () => {
  let component: ExperienceproffesionelleComponent;
  let fixture: ComponentFixture<ExperienceproffesionelleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceproffesionelleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceproffesionelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
