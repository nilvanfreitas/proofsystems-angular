import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {TweenMax} from "gsap";

@Component({
  selector: 'pc-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @ViewChild('arrow') arrow;
  @Input() number: number;


  constructor() { }

  arrowAnim(){
 

    const element = document.getElementsByClassName('animated-arrow')[this.number];

    TweenMax.to(element, .1, {
      x: "100%",
      ease: "snappy",
      delay: .3,
      onComplete: function() {
          TweenMax.set(element, {
              x: "-100%"
          }), TweenMax.to(element, .4, {
              x: "0%",
              ease: "snappy",
              clearProps: "all"
          })
      }
  }) 
  }

  ngOnInit() {
   
 
  }










}
