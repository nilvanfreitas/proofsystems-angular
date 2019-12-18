import { Component, OnInit, ViewChild } from '@angular/core';
import {TweenMax} from "gsap";


@Component({
  selector: 'pc-button-arrow',
  template: `<a (mouseenter)="arrowAnim()"><span><ng-content></ng-content></span><span class="animated-arrow" class="arrow33">

          


<svg width="19px"  class="arrow-svg" height="8px" viewBox="0 0 19 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
    <g id="Home" transform="translate(-403.000000, -1613.000000)" stroke="#FFFFFF">
        <g id="About-Us" transform="translate(261.000000, 1234.000000)">
            <g id="Group-3" transform="translate(0.000000, 357.000000)">
                <path d="M143.046387,26 L160.5,26" id="Line-3"></path>
                <polyline id="Path-2" transform="translate(157.227417, 26.000000) rotate(-135.000000) translate(-157.227417, -26.000000) " points="155.17708 23.7226496 154.94051 28.2773504 159.514323 28.0598935"></polyline>
            </g>
        </g>
    </g>
</g>
</svg>

  </span></a>`,
  styleUrls: ['./button-arrow.component.scss']
})
export class ButtonArrowComponent implements OnInit {
  @ViewChild('arrow') arrow;


  constructor() { }
  

  arrowAnim(){
    TweenMax.to('.arrow-svg', .1, {
      x: "100%",
      ease: "snappy",
      delay: .3,
      onComplete: function() {
          TweenMax.set('.arrow-svg', {
              x: "-100%"
          }), TweenMax.to('.arrow-svg', .4, {
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
