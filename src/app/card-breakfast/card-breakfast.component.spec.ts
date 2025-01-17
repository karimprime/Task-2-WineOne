import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBreakfastComponent } from './card-breakfast.component';

describe('CardBreakfastComponent', () => {
  let component: CardBreakfastComponent;
  let fixture: ComponentFixture<CardBreakfastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardBreakfastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardBreakfastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
