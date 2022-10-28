import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilcandidatComponent } from './profilcandidat.component';

describe('ProfilcandidatComponent', () => {
  let component: ProfilcandidatComponent;
  let fixture: ComponentFixture<ProfilcandidatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilcandidatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilcandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
