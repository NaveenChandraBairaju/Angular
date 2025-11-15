import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodOrderReactiveFormsComponent } from './food-order-reactive-forms.component';

describe('FoodOrderReactiveFormsComponent', () => {
  let component: FoodOrderReactiveFormsComponent;
  let fixture: ComponentFixture<FoodOrderReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodOrderReactiveFormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodOrderReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
