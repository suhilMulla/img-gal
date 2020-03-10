import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cus2013Component } from './cus2013.component';

describe('Cus2013Component', () => {
  let component: Cus2013Component;
  let fixture: ComponentFixture<Cus2013Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cus2013Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cus2013Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
