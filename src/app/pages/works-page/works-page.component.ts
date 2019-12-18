import { Component, OnInit, ɵConsole } from '@angular/core';
import Shuffle from 'shufflejs';
@Component({
  selector: 'app-works-page',
  templateUrl: './works-page.component.html',
  styleUrls: ['./works-page.component.scss']
})
export class WorksPageComponent implements OnInit {
  headerColor = 'black';
  shuffleInstance: Shuffle;
  categoryList = [
    {
      id: -1,
      title: 'All works'
    },
    {
      id: 2,
      title: 'Web Design'
    },
    {
      id: 3,
      title: 'Branding'
    },
    {
      id: 4,
      title: 'Advertising'
    }
  ];
  allCats = [];
  triggerMenu = false;

  activeCat = -1;

  constructor() { 
    this.categoryList.forEach((element, index) => {
          this.allCats.push(element.id.toString());
    })

  }


  convertIdToDataGroup(id: number): string {
    return '["' + id + '"]';
  }


  filter(id): void {
    this.activeCat = id;
    const filter = id.toString();
    if(id == -1){

      console.log(this.allCats);
      this.shuffleInstance.filter(this.allCats);
    } else {
          this.shuffleInstance.filter(filter);
    }

}

ngAfterContentInit() {


}
ngOnInit() {
  setTimeout(() => {

    this.triggerMenu = true;
    const  element = document.querySelector('.my-shuffle-container');
    const  sizer = element.querySelector('.my-sizer-element');

    this.shuffleInstance = new Shuffle(element, {
      itemSelector: '.picture-item',
      sizer: sizer
    });  
    this.filter(this.activeCat);
  
  }, 0);



}

}
