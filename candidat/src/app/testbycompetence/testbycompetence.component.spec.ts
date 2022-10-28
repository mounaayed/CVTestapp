import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestbycompetenceComponent } from './testbycompetence.component';

describe('TestbycompetenceComponent', () => {
  let component: TestbycompetenceComponent;
  let fixture: ComponentFixture<TestbycompetenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestbycompetenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestbycompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
