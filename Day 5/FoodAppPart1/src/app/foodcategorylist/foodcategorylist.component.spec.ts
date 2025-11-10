import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodcategorylistComponent } from './foodcategorylist.component';

describe('FoodcategorylistComponent', () => {
  let component: FoodcategorylistComponent;
  let fixture: ComponentFixture<FoodcategorylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodcategorylistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodcategorylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
