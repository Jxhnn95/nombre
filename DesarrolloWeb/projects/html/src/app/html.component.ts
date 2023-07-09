import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css','projects\style.css']
  
})
export class HtmlComponent  implements OnInit {
  @Input()
  valor: number=1;
  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
