import { Injectable ,Output,EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClickorderService {
 
@Output() EventClick=new EventEmitter<string>();

Clickorder(mensaje:string){this.EventClick.emit(mensaje)} 
  constructor() { }

}
