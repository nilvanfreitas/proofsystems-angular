import { Component, OnInit,  Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-menu-cancel',
  templateUrl: './menu-cancel.component.html',
  styleUrls: ['./menu-cancel.component.scss']
})
export class MenuCancelComponent  implements OnInit {
  @Input() hamburger;
  @Input() color = 'white';
  
  constructor() {}

  ngOnInit(){}

}
