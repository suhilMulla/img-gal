import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Eve2019Component } from './eve2019.component';

describe('Eve2019Component', () => {
  let component: Eve2019Component;
  let fixture: ComponentFixture<Eve2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Eve2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Eve2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
