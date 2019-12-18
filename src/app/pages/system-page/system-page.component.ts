import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-system-page',
  templateUrl: './system-page.component.html',
  styleUrls: ['./system-page.component.scss']
})
export class SystemPageComponent implements OnInit {

  openId = -1;
  startAnim = false;
  constructor() { }

  open(id: number){
    this.openId = id === this.openId ? -1 : id;
  }

  ngOnInit() {
    setTimeout(() => {
      this.startAnim = true;
    },1000);
  }

}
