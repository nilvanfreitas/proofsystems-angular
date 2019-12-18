import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onix-capital',
  templateUrl: './onix-capital.component.html',
  styleUrls: ['./onix-capital.component.scss']
})
export class OnixCapitalComponent implements OnInit {
  headerColor = 'white';
  startAnim = false;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.startAnim = true;
    })
  }

}
