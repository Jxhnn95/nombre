import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent implements OnInit {
  @Input()
  valor: number=1;
  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
