import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilentrepriseComponent } from './profilentreprise.component';

describe('ProfilentrepriseComponent', () => {
  let component: ProfilentrepriseComponent;
  let fixture: ComponentFixture<ProfilentrepriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilentrepriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilentrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
