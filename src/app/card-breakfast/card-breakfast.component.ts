import { Component, Input } from '@angular/core';
import { items } from '../models/seafooditems.interface';

@Component({
  selector: 'app-card-breakfast',
  imports: [],
  templateUrl: './card-breakfast.component.html',
  styleUrl: './card-breakfast.component.css'
})
export class CardBreakfastComponent {
  @Input({ required: true }) breakfastItem: items = {} as items;
}
