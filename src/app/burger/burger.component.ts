import { Component, OnInit, ChangeDetectorRef, EventEmitter, Output,Input  } from '@angular/core';
import { ScrollAnim } from '../scroll-anim';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss']
})


export class BurgerComponent implements OnInit {
  @Input() hamburger;
  @Output() changed = new EventEmitter();
  @Input() color = 'white';
  
  constructor(public change: ChangeDetectorRef) { 
  }

  burger(){
    this.hamburger = !this.hamburger;
    this.changed.emit(this.hamburger);
    let body = document.getElementsByTagName('body')[0];

    if (window.innerWidth <= 768) {
      if(this.hamburger) {
        body.classList.add('site-scroll');
      }
      else {
        body.classList.remove('site-scroll');
      }
    }
    else {
      body.classList.remove('site-scroll');
    }
  }

  ngOnInit() {
  }
}
