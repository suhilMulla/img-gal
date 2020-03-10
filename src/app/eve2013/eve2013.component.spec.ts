import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Eve2013Component } from './eve2013.component';

describe('Eve2013Component', () => {
  let component: Eve2013Component;
  let fixture: ComponentFixture<Eve2013Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Eve2013Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Eve2013Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
