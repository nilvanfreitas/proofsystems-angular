import {
  Component,
  ViewChild,
  ElementRef,
  ViewChildren,
  HostListener,
  AfterViewInit
} from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HelperService } from 'src/app/shared/helper.service';

declare const Waypoint: any;
@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.scss"]
})
export class MainPageComponent implements AfterViewInit{
  @ViewChildren("li") li: ElementRef;
  @ViewChild("anim_li") anim_li;
  @ViewChild("swiper") swiper;
  @ViewChild("container") container;
  @ViewChildren("anim_img") anim_img;
  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.leftSpace = this.container.nativeElement.offsetLeft + 45;
  }

  diff = 0;
  elements;
  hoverIndex = 1;
  learn_more = true;
  headerColor = "white";
  leftSpace = 0;
  config: any = {
    pagination: {
      el: ".swiper-pagination"
    },
    paginationClickable: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    spaceBetween: 30
  };

  mobileHover = '';

  constructor(private sanitizer: DomSanitizer, private helperService: HelperService) {}

  // ngOnInit() {
  //   setTimeout(() => {
  //     console.log("style", this.container.nativeElement.style);
  //     this.leftSpace = this.container.nativeElement.offsetLeft + 45;
  //     // alert(this.container.nativeElement.offsetLeft);
  //     console.log(this.li);
  //     this.doIt();
  //   });
  //   document.body.style.overflow = 'hidden';
  //   // setTimeout(() => {
  //   //   document.body.style.overflow = 'vissible';
  //   // }, 6500);
  //   // $('#dm').trigger('click');
  //   // setInterval(() => {
  //   //   let dm = this.helperService.isElementInViewport(document.getElementById('dm'));
  //   //   let gd = this.helperService.isElementInViewport(document.getElementById('gd'));
  //   //   let ui = this.helperService.isElementInViewport(document.getElementById('ui'));
  //   //   console.log('dm', dm)
  //   //   console.log('gd', gd)
  //   //   console.log('ui', ui)
  //
  //   // }, 1000)
  //
  //
  //   // const out1 = new Waypoint({
  //   //   element: document.getElementsByClassName('explore-mobile'),
  //   //   handler: (direction) => {
  //   //     console.log('OUT1!')
  //   //     this.mobileHover = '';
  //   //   }
  //   // });
  //
  //   // const out2 = new Waypoint({
  //   //   element: document.getElementsByClassName('featured-client'),
  //   //   handler: (direction) => {
  //   //     console.log('OUT2!')
  //   //     this.mobileHover = '';
  //   //   }
  //   // });
  //
  //
  // }

  ngAfterViewInit() {
    console.log('this.helperService.isMobile()', this.helperService.isMobile())

    if (this.helperService.isMobile()) {
      const dm = new Waypoint({
        element: document.getElementById('dm'),
        handler: (direction, s) => {
          console.log('Scrolled to digital marketing!', direction, s)
          this.mobileHover = 'dm';

        }
      });
      const gd = new Waypoint({
        element: document.getElementById('gd'),
        handler: (direction) => {
          console.log('Scrolled to graphic design!')
          this.mobileHover = 'gd';

        }
      });
      const ui = new Waypoint({
        element: document.getElementById('ui'),
        handler: (direction) => {
          console.log('Scrolled to uiux!')
          this.mobileHover = 'ui';
        }
      });
    }
  }

  next() {
    this.swiper.swiper.slideNext();
  }

  prev() {
    this.swiper.swiper.slidePrev();
  }
  changHEADER(event) {
    this.headerColor = event;
  }
  changeDiff(diff) {
    this.diff = diff;
  }

  hoverLi(index: number) {
    this.hoverIndex = index;

    if (index === 1) {
      this.anim_li.nativeElement.style.top = "20px";
    }
    if (index === 2) {
      this.anim_li.nativeElement.style.top = "125px";
    }

    if (index === 3) {
      this.anim_li.nativeElement.style.top = "230px";
    }
    if (index === 4) {
      this.anim_li.nativeElement.style.top = "335px";
    }
  }

  learnMore() {
    this.learn_more = !this.learn_more;
  }

  doIt(): void {}

}
