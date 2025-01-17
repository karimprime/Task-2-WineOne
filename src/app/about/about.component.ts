import { Component } from '@angular/core';
import { ParagraphComponent } from "../paragraph/paragraph.component";

@Component({
  selector: 'app-about',
  imports: [ParagraphComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
