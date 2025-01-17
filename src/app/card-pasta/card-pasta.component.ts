import { Component, Input } from '@angular/core';
import { items } from '../models/seafooditems.interface';

@Component({
  selector: 'app-card-pasta',
  imports: [],
  templateUrl: './card-pasta.component.html',
  styleUrl: './card-pasta.component.css'
})
export class CardPastaComponent {
  @Input({ required: true }) pastaItem: items = {} as items;
}
