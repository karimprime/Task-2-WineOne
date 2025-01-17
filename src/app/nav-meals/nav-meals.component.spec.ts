import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMealsComponent } from './nav-meals.component';

describe('NavMealsComponent', () => {
  let component: NavMealsComponent;
  let fixture: ComponentFixture<NavMealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavMealsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
