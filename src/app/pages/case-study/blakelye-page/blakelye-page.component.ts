import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blakelye-page',
  templateUrl: './blakelye-page.component.html',
  styleUrls: ['./blakelye-page.component.scss']
})
export class BlakelyePageComponent implements OnInit {
  headerColor = 'black';
  startAnim = false;
  
  constructor() { }

  ngOnInit() {

    setTimeout(() => {
      this.startAnim = true;
    })
  }

}
