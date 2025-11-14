import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodcategoryshowcaseComponent } from './foodcategoryshowcase.component';

describe('FoodcategoryshowcaseComponent', () => {
  let component: FoodcategoryshowcaseComponent;
  let fixture: ComponentFixture<FoodcategoryshowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodcategoryshowcaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodcategoryshowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
