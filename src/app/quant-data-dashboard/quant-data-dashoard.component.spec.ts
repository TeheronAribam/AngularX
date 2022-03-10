import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantDataDashoardComponent } from './quant-data-dashoard.component';

describe('QuantDataDashoardComponent', () => {
  let component: QuantDataDashoardComponent;
  let fixture: ComponentFixture<QuantDataDashoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuantDataDashoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantDataDashoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
