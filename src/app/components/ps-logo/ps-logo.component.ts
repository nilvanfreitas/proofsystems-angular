import { Component, OnInit,  Input, ChangeDetectorRef, ViewChild, HostListener} from '@angular/core';
import { ScrollAnim } from '../../scroll-anim';
@Component({
  selector: 'app-ps-logo',
  templateUrl: './ps-logo.component.html',
  styleUrls: ['./ps-logo.component.scss']
})
export class PsLogoComponent  implements OnInit{

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
    blocks = ['.learn-more','.explore-desktop','.capabilities'];
    elementsPositions = [];
    
    constructor(public change: ChangeDetectorRef) { }

    ngOnInit(){
        this.blocks.forEach(el => {
          this.elementsPositions.push(this.offset(document.querySelector(el)));
        })

        console.log('block', this.elementsPositions);
    }



  
    offset(el) {
      var rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop,
        bottom: rect.top + scrollTop + rect.height,

         left: rect.left + scrollLeft, class: this.whiteOrBlack(el.className) }
  }




  whiteOrBlack(str: string){
    if(str.includes('white')){
      return 'white';
    }
    if(str.includes('black')){
      return 'black';
    }
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




        for(let i = 0; i < this.elementsPositions.length; i++ ){
            if( scroll >= this.elementsPositions[i].top && scroll <= this.elementsPositions[i].top + 40  ){
             this.test = scroll -  this.elementsPositions[i].top;
             console.log('scroll', el, this.test);
          } else {
            this.test = 0;
            console.log('scroll',this.test);
          }
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

    getClosestSection() {
        this.blocks.forEach(el => {
          let pos =  this.offset(document.querySelector(el));

          console.log(pos);
          if( window.scrollY > pos.top &&  window.scrollY < pos.bottom ){

                 return pos;
          }
        })
        // return null;
    }
  
  
    bottomStyleBlack() {
      if( this.test !== 0){
        return { bottom: '-' + this.test + 'px' }
      } else {
        return { bottom: '0px'}
      }
    }

    topStyleBlack() {
      if( this.test !== 0){
        return { bottom: this.test + 'px' }
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


