import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-member-modal',
  templateUrl: './member-modal.component.html',
  styleUrls: ['./member-modal.component.scss']
})
export class MemberModalComponent implements OnInit {

  @Input() member: object;
  @Output() close = new EventEmitter();

  constructor() { }

  _close(){
    this.close.emit(true);
  }


  ngOnInit() {
  }

}
