import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublieroffreComponent } from './publieroffre.component';

describe('PublieroffreComponent', () => {
  let component: PublieroffreComponent;
  let fixture: ComponentFixture<PublieroffreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublieroffreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublieroffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
