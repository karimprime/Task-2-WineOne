import { Component } from '@angular/core';
import { DataSendComponent } from "../data-send/data-send.component";

@Component({
  selector: 'app-team',
  imports: [DataSendComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  dataSentDone = false;

  dataSent() {
    this.dataSentDone = true;
  }
}
