import { Component } from '@angular/core';
import { ParagraphComponent } from "../paragraph/paragraph.component";

@Component({
  selector: 'app-contacts',
  imports: [ParagraphComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {

}
