import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'pc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() headerColor = 'black';
  @Input() diff;
  hamburger = false;
  constructor() { }
  burgerChanged(){
    alert(3);
  }
  
  ngOnInit() {
  }
}
