import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice-directives',
  templateUrl: './practice-directives.component.html',
  styleUrls: ['./practice-directives.component.css']
})
export class PracticeDirectivesComponent implements OnInit {

  clicks:Date[] =[];

 isShown = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleShow(){
    this.isShown = !this.isShown;
    this.clicks.push(new Date());
  }
}
