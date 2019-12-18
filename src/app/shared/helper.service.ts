import { Observable } from 'rxjs';
import * as MobileDetect from "mobile-detect";


export class HelperService {
  isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.bottom > 0 &&
      rect.right > 0 &&
      rect.left <
        (window.innerWidth ||
          document.documentElement.clientWidth) /* aor $(window).width() */ &&
      rect.top <
        (window.innerHeight ||
          document.documentElement.clientHeight) /* or $(window).height() */
    );

  }
  isMobile() {
    const md = new MobileDetect(window.navigator.userAgent);
    return md.mobile();
  }
}
