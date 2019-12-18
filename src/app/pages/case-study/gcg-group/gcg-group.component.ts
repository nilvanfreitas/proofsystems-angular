import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gcg-group',
  templateUrl: './gcg-group.component.html',
  styleUrls: ['./gcg-group.component.scss']
})
export class GcgGroupComponent implements OnInit {
  headerColor = 'black';
  startAnim = false;
  
  constructor() { }

  ngOnInit() {

    setTimeout(() => {
      this.startAnim = true;
    })
  }

}
