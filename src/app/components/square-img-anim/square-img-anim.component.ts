import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-square-img-anim',
  templateUrl: './square-img-anim.component.html',
  styleUrls: ['./square-img-anim.component.scss']
})
export class SquareImgAnimComponent implements OnInit {

  @Input() bg: string;
  @Input() title: string;
  @Input() caption: string;
  constructor() { }

  ngOnInit() {
  }

}

