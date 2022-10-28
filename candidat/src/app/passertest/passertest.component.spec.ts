import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassertestComponent } from './passertest.component';

describe('PassertestComponent', () => {
  let component: PassertestComponent;
  let fixture: ComponentFixture<PassertestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassertestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassertestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
