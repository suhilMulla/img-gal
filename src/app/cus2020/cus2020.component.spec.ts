import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cus2020Component } from './cus2020.component';

describe('Cus2020Component', () => {
  let component: Cus2020Component;
  let fixture: ComponentFixture<Cus2020Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cus2020Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cus2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
