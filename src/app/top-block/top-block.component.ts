import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-top-block-anim',
  templateUrl: './top-block.component.html',
  styleUrls: ['./top-block.component.scss']
})
export class TopBlockAnimComponent implements OnInit {

  anim = false;
  constructor() {

    setTimeout(()=> {
      var x = document.getElementById("myDIV");


    
// Code for Chrome, Safari and Opera
// x.addEventListener("webkitAnimationEnd", myEndFunction);

// Standard syntax
x.addEventListener("webkitAnimationIteration", () => {
    // this.anim = true;
});
 
    },5000)
   }

  ngOnInit() {
  }

  



}
