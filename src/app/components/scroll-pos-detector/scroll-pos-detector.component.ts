import { Component, OnInit,HostListener, ViewChild, EventEmitter, Output, Input } from '@angular/core';


@Component({
  selector: '*[app-scroll-pos-detector]',
  templateUrl: './scroll-pos-detector.component.html',
  styleUrls: ['./scroll-pos-detector.component.scss']
})
export class ScrollPosDetectorComponent implements OnInit {
  @ViewChild('element') element;
  @Output() reachedEelement = new EventEmitter();
  @Input() color:string;
  @Input() deviation: number;
  @Output() diff = new EventEmitter();
  @HostListener("window:scroll", [])
  onWindowScroll(event) {
      const deviated = this.element.nativeElement.offsetTop - this.deviation;  
     const elementScroll = this.element.nativeElement.offsetTop;
     const elementHeight = this.element.nativeElement.offsetHeight;
    if(window.scrollY  >= elementScroll - 37  && window.scrollY  <= elementScroll + elementHeight   ) {
       this.reachedEelement.emit(this.color);
       //this.deviation.emit();
       this.diff.emit(elementScroll);
       console.log(elementScroll);
    }
  }
  constructor() { }
  ngOnInit() {
  }

}
