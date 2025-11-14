import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsfoodmenuComponent } from './rxjsfoodmenu.component';

describe('RxjsfoodmenuComponent', () => {
  let component: RxjsfoodmenuComponent;
  let fixture: ComponentFixture<RxjsfoodmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsfoodmenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsfoodmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
