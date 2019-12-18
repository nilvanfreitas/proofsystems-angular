import { Component, OnInit, ChangeDetectorRef, Input,  OnDestroy } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-test-header',
  templateUrl: './test-header.component.html',
  styleUrls: ['./test-header.component.scss']
})
export class TestHeaderComponent implements OnInit,  OnDestroy {

  anim = false;
  hamburger = false;
  @Input() startAnim = false;
  constructor(private change: ChangeDetectorRef) { }

  animateBtn() {
  this.anim = !this.anim;
  if (!this.change['destroyed']) {
    this.change.detectChanges();
   }
 
  }
  just(){
    this.anim = !this.anim;
    if (!this.change['destroyed']) {
      this.change.detectChanges();
     }
      }
 
  ngOnInit() {
      $('nav.fixed').midnight(); 
      
      $('body').on('mouseover', 'app-hire-us', (event) => { 
      this.anim = !this.anim;
      if (!this.change['destroyed']) {
        this.change.detectChanges();
       }
     });
     $('body').on('mouseout', 'app-hire-us', (event) => { 
      this.anim = !this.anim;
      if (!this.change['destroyed']) {
        this.change.detectChanges();
       }
     });
    
  }

  ngOnDestroy() {
    this.change.detach(); // do this
  }

}




