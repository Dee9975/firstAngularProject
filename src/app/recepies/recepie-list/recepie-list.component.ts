import { Component, OnInit } from '@angular/core';
import { Recepie } from '../recepie.model';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {
  recepies: Recepie[] = [
    new Recepie('Test recepie', 'This is a test description', 'https://images.pexels.com/photos/274131/pexels-photo-274131.jpeg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
