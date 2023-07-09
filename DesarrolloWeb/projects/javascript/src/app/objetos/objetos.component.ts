import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-objetos',
  templateUrl: './objetos.component.html',
  styleUrls: ['./objetos.component.css']
})
export class ObjetosComponent implements OnInit {
  @Input()
  valor: number=1;
  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
