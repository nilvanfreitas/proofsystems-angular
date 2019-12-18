import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header-animtion',
  templateUrl: './header-animtion.component.html',
  styleUrls: ['./header-animtion.component.scss']
})
export class HeaderAnimtionComponent implements OnInit, OnDestroy {

  anim = false;
  @Output() _anim = new EventEmitter();

  constructor() {
    // if (localStorage.getItem('isLoaded')) {
    //   setTimeout(() => {
    //     this.anim = true;
    //     this._anim.emit(this.anim);
    //     const temp = document.getElementById('myDiv').parentElement;
    //     temp.classList.add('logo-full');
    //     temp.parentElement.classList.add('active-full z-index-1');
    //   }, 0);
    // } else {
    //   setTimeout(() => {
    //     this.anim = true;
    //     this._anim.emit(this.anim);
    //     localStorage.setItem('isLoaded', 'true');
    //
    //   }, 6500);
    // }
  }

  ngOnInit() {
    if (localStorage.getItem('isLoaded')) {
      setTimeout(() => {
        this.anim = true;
        this._anim.emit(this.anim);
        const temp = document.getElementById('myDIV').parentElement;
        temp.parentElement.classList.add('active-full', 'z-index-1');
        temp.classList.add('logo-full');
      }, 0);
    } else {
      setTimeout(() => {
        this.anim = true;
        this._anim.emit(this.anim);
        localStorage.setItem('isLoaded', 'true');

      }, 6500);
    }
    if (!localStorage.getItem('isLoaded')) {
      setTimeout(() => {
        document.body.style.overflow = 'initial';

      }, 6500);
    }
  }

  ngOnDestroy() {
    if (!localStorage.getItem('isLoaded')) {

    }
  }
}
