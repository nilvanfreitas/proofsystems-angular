import { Component, OnInit} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router, NavigationEnd } from '@angular/router';

import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        top: '0%',
      },
      )),
      state('closed', style({
        top: '-200%'
      })),
      transition('open => closed', [
        animate('.6s'),
      ]),
      transition('closed => open', [
        animate('0s')
      ]),
    ])
  ]

})

export class AppComponent implements OnInit {

  startAnim = true;

  constructor(private spinner: NgxSpinnerService, private router: Router){
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      console.log(evt);
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      if ((evt instanceof NavigationEnd)) { 
           this.startAnim = false;
          setTimeout(() => {
            this.startAnim = true;
            console.log('3');
        },2000)
       
    }
     

      window.scrollTo(0, 0)
  });



  }

}
