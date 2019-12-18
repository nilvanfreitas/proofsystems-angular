
import { Input, HostListener, ViewChild, ChangeDetectorRef } from '@angular/core';

export class ScrollAnim {
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
    min_width = 992;
    test = 0;
    
    constructor(public change: ChangeDetectorRef) { }

    offset(el) {
      var rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
  
    @HostListener("window:scroll", [])
    onWindowScroll(event) {
        const deviated = this.element.nativeElement.offsetTop;
    
        this.height = this.element.nativeElement.offsetHeight;


        const el = this.offset(document.querySelector('.learn-more'));

  
       
      
        const count = Math.floor(window.scrollY / window.innerHeight);
        const scroll = window.scrollY;

     

        let calc = (window.innerHeight *  count) - window.scrollY - deviated - 1;
        this.bottom = ( (window.innerHeight *  count)  - window.scrollY - deviated - 1);
        this.top=  ((window.innerHeight *  count)  - window.scrollY - deviated - 1);
        this.res = Math.abs(calc);
        this.change.markForCheck();

        if( scroll >= el.top && scroll <= el.top + 40  ){
       //   console.log('scroll', scroll -  el.top);

          this.test = scroll -  el.top;
        } else{
          this.test = 0;
       //   console.log('scroll', scroll -  el.top);
        }
    }




    
  
    bottomStyleWhite() {
      if( this.commonExpression()  && this.color === 'white'  && window.innerWidth > this.min_width){
        return { bottom: '-' + (this.height - (window.innerHeight - this.res)) + 'px' }
      } else {
        return { bottom: '0px'}
      }
    }
  
    topStyleWhite() {
      if( this.commonExpression() && this.color === 'white'  && window.innerWidth > this.min_width){
        return { bottom: (this.height - (window.innerHeight - this.res)) + 'px' }
     } else {
      return { bottom: '0px'}
     }
    }
    commonExpression(){
      return this.res > window.innerHeight - this.height  && this.res < window.innerHeight;
    }
  
  
    bottomStyleBlack() {
      if( this.commonExpression()  && this.color === 'black'  && window.innerWidth > this.min_width){
        return { bottom: '-' + (this.height - (window.innerHeight - this.res)) + 'px' }
      } else {
        return { bottom: '0px'}
      }
    }
  
    topStyleBlack() {
      if( this.commonExpression()  && this.color === 'black'  && window.innerWidth > this.min_width){
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
}
