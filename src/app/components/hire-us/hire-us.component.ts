import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { ScrollAnim } from '../../scroll-anim';
@Component({
  selector: 'app-hire-us',
  templateUrl: './hire-us.component.html',
  styleUrls: ['./hire-us.component.scss']
})
export class HireUsComponent implements OnInit {
  @Input() set animate(val){
    this._anim = val;
    console.log(val);
    this.change.markForCheck();
  }

  _anim;
  @Input() color;
  
  constructor(public change: ChangeDetectorRef) { 
  

  }

  
  ngOnInit() {
  }

}
