import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSeafoodComponent } from './card-seafood.component';

describe('CardSeafoodComponent', () => {
  let component: CardSeafoodComponent;
  let fixture: ComponentFixture<CardSeafoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSeafoodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSeafoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
