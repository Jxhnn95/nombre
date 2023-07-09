import { Component,OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-problemas',
  templateUrl: './problemas.component.html',
  styleUrls: ['./problemas.component.css']
})
export class ProblemasComponent implements OnInit {
  @Input()
  valor: number=1;
  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
