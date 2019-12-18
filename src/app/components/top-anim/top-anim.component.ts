import { Component, OnInit, HostListener } from '@angular/core';
import { WindowScrollingService } from '../../window-scrolling.service';
import * as MobileDetect from 'mobile-detect';

import * as $ from 'jquery';

@Component({
  selector: 'app-top-anim',
  templateUrl: './top-anim.component.html',
  styleUrls: ['./top-anim.component.scss']
})
export class TopAnimComponent implements OnInit {

  position;
  target;
  tween;
  tweenBack;
  anim = false;
  
  @HostListener("window:scroll", [])
  onWindowScroll(event) {  
    var OffsetTop = $('#Layer_2').offset().top;
    let opac = 1 - window.pageYOffset / 0.90 / OffsetTop; 
    if (new MobileDetect(window.navigator.userAgent).mobile() || window.innerWidth < 992) { 
      $('.fixed .logo').css({'opacity': opac, 'transition': 'none'});
    }
    else {
      $('#Layer_2 .cls-1').css('opacity', opac)      
    }
    
  }
  
  constructor(private scroll: WindowScrollingService ) {
    this.scroll.disable();
    setTimeout(()=> {
      var x = document.getElementById("myDIV");
    x.addEventListener("webkitAnimationIteration", () => {
        this.anim = true;
        // setTimeout(() => {
            // this.scroll.enable();
        // },2000);
    });
    },4000)
    
  }
  ngOnInit() {



  







//   let transitionEvent = whichTransitionEvent(),
//     item = document.querySelector('.logo-anim-4');


//    item.addEventListener('transitionend', transitionEndCallback);


// function transitionEndCallback(event) {
//   alert(3);
//     item.removeEventListener(transitionEvent, transitionEndCallback);
//     this.classList.remove('animate');
// }


// // Function from David Walsh: http://davidwalsh.name/css-animation-callback
// function whichTransitionEvent(){
//     var t,
//         el = document.createElement("fakeelement");

//     var transitions = {
//         "transition"      : "transitionend",
//         "OTransition"     : "oTransitionEnd",
//         "MozTransition"   : "transitionend",
//         "WebkitTransition": "webkitTransitionEnd"
//     }

//     for (t in transitions){
//         if (el.style[t] !== undefined){
//             return transitions[t];
//         }
//     }
// }
  }
}
