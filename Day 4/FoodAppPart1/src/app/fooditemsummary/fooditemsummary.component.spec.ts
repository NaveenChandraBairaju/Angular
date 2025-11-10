import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooditemsummaryComponent } from './fooditemsummary.component';

describe('FooditemsummaryComponent', () => {
  let component: FooditemsummaryComponent;
  let fixture: ComponentFixture<FooditemsummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooditemsummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooditemsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
