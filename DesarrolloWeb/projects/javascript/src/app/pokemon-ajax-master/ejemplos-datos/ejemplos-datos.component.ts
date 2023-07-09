import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-ejemplos-datos',
  templateUrl: './ejemplos-datos.component.html',
  styleUrls: ['./ejemplos-datos.component.css']
})
export class EjemplosDatosComponent implements OnInit {
  @Input()
  valor: number=1;
  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
