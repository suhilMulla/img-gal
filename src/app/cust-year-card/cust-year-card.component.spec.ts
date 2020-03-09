import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustYearCardComponent } from './cust-year-card.component';

describe('CustYearCardComponent', () => {
  let component: CustYearCardComponent;
  let fixture: ComponentFixture<CustYearCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustYearCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustYearCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
