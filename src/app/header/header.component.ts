import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

texts: {
    moi: 'eerddddddddddddddd',
    formations: 'erer',
    expriences: 'erer',
  };

  age: number = 27;

  ngOnInit() {
  }
}
