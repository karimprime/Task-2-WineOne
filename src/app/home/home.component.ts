import { Component } from '@angular/core';
import { ParagraphComponent } from "../paragraph/paragraph.component";

@Component({
  selector: 'app-home',
  imports: [ParagraphComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
