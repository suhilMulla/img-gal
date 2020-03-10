import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cus2012Component } from './cus2012.component';

describe('Cus2012Component', () => {
  let component: Cus2012Component;
  let fixture: ComponentFixture<Cus2012Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cus2012Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cus2012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
