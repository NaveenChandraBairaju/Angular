import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryOfOrdersComponent } from './history-of-orders.component';

describe('HistoryOfOrdersComponent', () => {
  let component: HistoryOfOrdersComponent;
  let fixture: ComponentFixture<HistoryOfOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryOfOrdersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryOfOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
