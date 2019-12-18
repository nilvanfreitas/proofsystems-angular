import { Component, OnInit, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import * as MobileDetect from 'mobile-detect';

@Component({
  selector: 'app-h1',
  templateUrl: './h1.component.html',
  styleUrls: ['./h1.component.scss']
})
export class H1Component implements OnInit, AfterViewInit {
  @ViewChild('h1') text: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (new MobileDetect(window.navigator.userAgent).mobile() || window.innerWidth < 992) {
      const el = this.text.nativeElement;
      const data = el.childNodes[0].data.toUpperCase();
      if (data === 'PROOF') {
        el.style = 'font-size: 24vw';
      } else if (data === 'GROWTH') {
        el.style = 'font-size: 18vw';
      } else if (data === 'DESIGN') {
        el.style = 'font-size: 22vw';
      } else if (data === 'UX') {
        el.style = 'font-size: 30vw';
      }
    }
   }



}
