import {
  Component,
  OnInit,
  ViewChildren,
  ViewChild,
  Input
} from "@angular/core";
import {
  trigger,
  state,
  transition,
  style,
  animate
} from "@angular/animations";
import * as MobileDetect from "mobile-detect";
import { H1Component } from "../../components/h1/h1.component";
import { WindowScrollingService } from "src/app/window-scrolling.service";

@Component({
  selector: "app-test-anim",
  templateUrl: "./test-anim.component.html",
  styleUrls: ["./test-anim.component.scss"],
  animations: [
    trigger("visibilityChanged", [
      state("shown", style({ opacity: 1 })),
      state("hidden", style({ opacity: 0 })),
      transition("shown => hidden", animate("0ms")),
      transition("hidden => shown", animate("0ms"))
    ])
  ]
})
export class TestAnimComponent implements OnInit {
  visiblityState = "hidden";
  @ViewChildren(H1Component) h1;
  @ViewChild("ul") ul;
  @ViewChild("right_anim") rightAnim;
  @Input() set anim(val) {
    this._anim = val;
  }
  _anim = false;
  isMobile: boolean = false;

  current_index = 0;
  ulChildren;
  rightAnimChildren;
  h1_list = [];

  constructor(private scroll: WindowScrollingService) {
    this.headerCircle();
  }

  //switcher

  changeDescr() {
    Object.keys(this.rightAnimChildren).forEach((key, index) => {
      this.rightAnimChildren[key].className = "";
      if (this.current_index < this.h1_list.length) {
        if (this.current_index - 1 === index) {
          this.rightAnimChildren[key].className = "not-active";
        } else if (this.current_index === index) {
          this.rightAnimChildren[key].className = "active";
        }
      }
      if (this.current_index === 0) {
        this.rightAnimChildren[this.rightAnimChildren.length - 1].className =
          "hide";
      }
    });

    Object.keys(this.ulChildren).forEach((key, index) => {
      this.ulChildren[key].className = "";
      if (this.current_index < this.h1_list.length) {
        if (this.current_index - 1 === index) {
          this.ulChildren[key].className = "hide";
        } else if (this.current_index === index) {
          this.ulChildren[key].className = "show";
        }
      }
      if (this.current_index === 0) {
        this.ulChildren[this.ulChildren.length - 1].className = "hide";
      }
    });
  }

  ngOnInit() {
    this.scroll.enable();

    setTimeout(() => {
      this.ulChildren = this.ul.nativeElement.children;
      // this.changeDescr();
      this.rightAnimChildren = this.rightAnim.nativeElement.children;
    }, 1000);
    this.isMobile = this.getDeviceInfo() !== null;
    this.setH1List();
  }
  setH1List(): any {
    if (this.isMobile || window.innerWidth < 992) {
      this.h1_list = [
        {
          name: "GROWTH",
          state: "shown",
          description: "Measure <b>conversions</b> with verified data."
        },
        {
          name: "PROOF",
          state: "hidden",
          description:
            "We live in a complex world.<br><strong>Clarity</strong> sells."
        },
        {
          name: "DESIGN",
          state: "hidden",
          description:
            "<strong>Lucid</strong> and harmonious brands win online."
        },
        {
          name: "UX",
          state: "hidden",
          description: "Users demand navigable <b>brand</b> journeys."
        }
      ];
    } else {
      this.h1_list = [
        {
          name: "GROWTH",
          state: "shown",
          description:
            "We <strong>simplify</strong> complex brand messages down<br> to bite sized chunks and distribute them."
        },
        {
          name: "PROOF",
          state: "hidden",
          description:
            "We live in a complex world.<br><strong>Clarity</strong> sells."
        },
        {
          name: "DESIGN",
          state: "hidden",
          description:
            "We design harmoniously <strong>lucid</strong> brand<br> showcases that cut through the noise."
        },
        {
          name: "UX/UI",
          state: "hidden",
          description:
            "We map out brand journeys that are<br>precisely as <strong>simple</strong> as they need to be."
        }
      ];
    }
  }

  headerCircle() {
    setInterval(() => {
      this.h1_list[this.current_index].state = "hidden";
      if (this.current_index < this.h1_list.length - 1) {
        this.current_index++;
      } else if (this.current_index === this.h1_list.length - 1) {
        this.current_index = 0;
      }
      this.h1_list[this.current_index].state = "shown";

      this.changeDescr();
    }, 6000);
  }
  public getDeviceInfo(): string {
    const md = new MobileDetect(window.navigator.userAgent);
    return md.mobile();
  }
}
