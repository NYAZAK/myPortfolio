import { Component, OnInit } from '@angular/core';
export interface Tile {
  cols: number;
  rows: number;
  name?: string;
  img: string;
  lien: string;
}
@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {

  constructor() { }


  tiles: Tile[] = [
    { cols: 3, rows: 7, img: 'url("../../assets/img-content/datascenter-min.jpg")'
    , name: 'Site vitrine fonctionnel IP COM FRANCE', lien: 'http://www.ipcom-france.com'},
    { cols: 2, rows: 4,  img: 'url("../../assets/img-content/surf-min.jpg")'
    , name: 'Site one page en HTML5, CSS3, Javascript (DOM)', lien: '../../../sites/surfing/index.html'},
    { cols: 1, rows: 4, img: 'url("../../assets/img-content/stylevie.png")'
    , name: 'Site one page, projet OC, en HTML5, CSS3, Javascript (DOM), Bootstrap', lien: '../../sites/surfing/index.html'},
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
