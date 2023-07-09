import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-adivinar',
  templateUrl: './adivinar.component.html',
  styleUrls: ['./adivinar.component.css']
})
export class AdivinarComponent  implements OnInit {
  @Input()
  valor: number=1;
  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
