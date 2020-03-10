import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cus2019Component } from './cus2019.component';

describe('Cus2019Component', () => {
  let component: Cus2019Component;
  let fixture: ComponentFixture<Cus2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cus2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cus2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
