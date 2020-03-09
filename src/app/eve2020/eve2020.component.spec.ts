import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Eve2020Component } from './eve2020.component';

describe('Eve2020Component', () => {
  let component: Eve2020Component;
  let fixture: ComponentFixture<Eve2020Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Eve2020Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Eve2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
