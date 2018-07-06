import { Component, OnInit } from '@angular/core';
export interface Tile {
  cols: number;
  rows: number;
  text: string;
  name?: string;
  img: string;
  lien: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

    tiles: Tile[] = [
      {text: 'One', cols: 3, rows: 7, img: 'url("../../assets/img-content/datascenter-min.jpg")'
      , name: 'Site vitrine fonctionnel IP COM FRANCE', lien: 'http://www.ipcom-france.com'},
      {text: 'Two', cols: 2, rows: 4,  img: 'url("../../assets/img-content/surf-min.jpg")'
      , name: ''},
      {text: 'Three', cols: 1, rows: 4, img: 'url("../../assets/img-content/stylevie.png")'
      , name: ''},
      // {text: 'Four', cols: 3, rows: 3, img: 'url("../../assets/img-content/surf-min.jpg")'
      // , name: ''},
      // {text: 'Five', cols: 6, rows: 3, img: 'url("../../assets/img-content/surf-min.jpg")'
      // , name: ''},
      // {text: 'Sixe', cols: 3, rows: 3, img: 'url("../../assets/img-content/surf-min.jpg")'
      // , name: ''},
      // {text: 'Seven', cols: 3, rows: 3, img: 'url("../../assets/img-content/surf-min.jpg")'
      // , name: ''},
    ];

  ngOnInit() {
  }
}
