import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent  implements OnInit {
  @Input()
  valor: number=1;
  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
