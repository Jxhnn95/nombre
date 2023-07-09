import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-edad',
  templateUrl: './edad.component.html',
  styleUrls: ['./edad.component.css']
})
export class EdadComponent  implements OnInit {
  @Input()
  valor: number=1;
  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
