import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultDataDashboardComponent } from './result-data-dashboard.component';

describe('ResultDataDashboardComponent', () => {
  let component: ResultDataDashboardComponent;
  let fixture: ComponentFixture<ResultDataDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultDataDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultDataDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
