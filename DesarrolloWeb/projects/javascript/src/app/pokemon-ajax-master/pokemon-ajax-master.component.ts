import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-ajax-master',
  templateUrl: './pokemon-ajax-master.component.html',
  styleUrls: ['./pokemon-ajax-master.component.css']
})
export class PokemonAjaxMasterComponent implements OnInit {
  @Input()
  valor: number=1;
  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
