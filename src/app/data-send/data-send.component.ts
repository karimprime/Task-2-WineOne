import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-data-send',
  imports: [],
  templateUrl: './data-send.component.html',
  styleUrl: './data-send.component.css'
})
export class DataSendComponent {
  @Output() sendData = new EventEmitter<void>();

  sentData() {
    this.sendData.emit();
  }
}
