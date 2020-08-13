import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dates = [
    { year: '2020', month: '1' },
    { year: '2020', month: '2' },
    { year: '2020', month: '3' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
