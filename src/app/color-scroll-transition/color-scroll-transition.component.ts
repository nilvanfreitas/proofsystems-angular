import { Component, OnInit, HostListener, ViewChild, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-color-scroll-transition',
  templateUrl: './color-scroll-transition.component.html',
  styleUrls: ['./color-scroll-transition.component.scss']
})
export class ColorScrollTransitionComponent implements OnInit {
  @ViewChild('element') element;

  @Input() set _diff(value){
      this.diff = value;
  }

  @Input() color;
  diff;
  height;
  style;
  top;
  res;
  bottom;
  constructor(private change: ChangeDetectorRef) { }

  @HostListener("window:scroll", [])
  onWindowScroll(event) {
      const deviated = this.element.nativeElement.offsetTop;
  
      this.height = this.element.nativeElement.offsetHeight;
    
      const count = Math.floor(window.scrollY / window.innerHeight)
     
      let calc = (window.innerHeight *  count) - window.scrollY - deviated - 1;
      this.bottom = ( (window.innerHeight *  count)  - window.scrollY - deviated - 1);
      this.top=  ((window.innerHeight *  count)  - window.scrollY - deviated - 1);
      this.res = Math.abs(calc);
      this.change.markForCheck();
  }

  bottomStyleWhite() {
    if( this.res > window.innerHeight - this.height  && this.res < window.innerHeight  && this.color === 'white' ){
      return { bottom: '-' + (this.height - (window.innerHeight - this.res)) + 'px' }
    } else {
      return { bottom: '0px'}
    }
  }

  topStyleWhite() {
    if( this.res > window.innerHeight - this.height   && this.res < window.innerHeight && this.color === 'white' ){
      return { bottom: (this.height - (window.innerHeight - this.res)) + 'px' }
   } else {
    return { bottom: '0px'}
   }
  }


  bottomStyleBlack() {
    if( this.res > window.innerHeight - this.height   && this.res < window.innerHeight  && this.color === 'black' ){
      return { bottom: '-' + (this.height - (window.innerHeight - this.res)) + 'px' }
    } else {
      return { bottom: '0px'}
    }
  }

  topStyleBlack() {
    if( this.res > window.innerHeight - this.height   && this.res < window.innerHeight  && this.color === 'black' ){
      return { bottom: (this.height - (window.innerHeight - this.res)) + 'px' }
   } else {
    return { bottom: '0px'}
   }
  }

  zIndexBlack(){
    if(this.color == 'black'){
        return  true ;
     }
  }

  zIndexWhite(){  
    if(this.color == 'white'){
           return  true ;
      }  
  }

  ngOnInit() {
  }

}
