import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'input[app-input-directive]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./input-directive.component.scss']
})
export class InputDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
