import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-token-generator',
  templateUrl: './token-generator.component.html',
  styleUrls: ['./token-generator.component.scss']
})
export class TokenGeneratorComponent implements OnInit {
  headerColor = 'white';
  startAnim = false;
  
  constructor() { }

  ngOnInit() {

    setTimeout(() => {
      this.startAnim = true;
    })
  }

}
