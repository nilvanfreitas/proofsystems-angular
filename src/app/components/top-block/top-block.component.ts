import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-block',
  templateUrl: './top-block.component.html',
  styleUrls: ['./top-block.component.scss']
})
export class TopBlockComponent implements OnInit {
  @Input() page_name: string;
  @Input() topic: string;
  constructor() { }

  ngOnInit() {
  }

}
