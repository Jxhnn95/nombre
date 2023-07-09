import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  @Input()
  valor: number=1;
  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
