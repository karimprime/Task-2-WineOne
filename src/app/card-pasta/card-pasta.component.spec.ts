import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPastaComponent } from './card-pasta.component';

describe('CardPastaComponent', () => {
  let component: CardPastaComponent;
  let fixture: ComponentFixture<CardPastaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPastaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPastaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
