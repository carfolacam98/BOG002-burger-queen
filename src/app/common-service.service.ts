import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  @Output() aClickedEvent = new EventEmitter<string>();

  constructor() { }
  AClicked = (msg: string) => this.aClickedEvent.emit(msg);
}
