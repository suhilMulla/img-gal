import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Eve2012Component } from './eve2012.component';

describe('Eve2012Component', () => {
  let component: Eve2012Component;
  let fixture: ComponentFixture<Eve2012Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Eve2012Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Eve2012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
