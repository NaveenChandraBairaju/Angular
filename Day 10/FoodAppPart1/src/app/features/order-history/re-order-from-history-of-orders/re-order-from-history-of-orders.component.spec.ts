import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReOrderFromHistoryOfOrdersComponent } from './re-order-from-history-of-orders.component';

describe('ReOrderFromHistoryOfOrdersComponent', () => {
  let component: ReOrderFromHistoryOfOrdersComponent;
  let fixture: ComponentFixture<ReOrderFromHistoryOfOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReOrderFromHistoryOfOrdersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReOrderFromHistoryOfOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
