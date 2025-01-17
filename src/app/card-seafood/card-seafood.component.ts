import { Component, Input } from '@angular/core';
import { items } from '../models/seafooditems.interface';

@Component({
  selector: 'app-card-seafood',
  imports: [],
  templateUrl: './card-seafood.component.html',
  styleUrl: './card-seafood.component.css'
})
export class CardSeafoodComponent {
  @Input({ required: true }) seafoodItem: items = {} as items;
}
