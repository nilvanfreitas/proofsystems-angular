import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { SwiperModule } from 'ngx-useful-swiper';
import { TopAnimComponent } from './components/top-anim/top-anim.component';
import { ScrollPosDetectorComponent } from './components/scroll-pos-detector/scroll-pos-detector.component';
import { FooterComponent } from './components/footer/footer.component';
import { SystemPageComponent } from './pages/system-page/system-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { IntroComponent } from './components/intro/intro.component';
import { TopBlockComponent } from './components/top-block/top-block.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { InputDirectiveComponent } from './components/input-directive/input-directive.component';
import { Select2Module } from 'ng2-select2';
import { SquareImgAnimComponent } from './components/square-img-anim/square-img-anim.component';
import { WorksPageComponent } from './pages/works-page/works-page.component';
import { AgencyPageComponent } from './pages/agency-page/agency-page.component';
import { MemberModalComponent } from './pages/member-modal/member-modal.component';
import { CaseStudyPageComponent } from './pages/case-study-page/case-study-page.component';
import { BlakelyePageComponent } from './pages/case-study/blakelye-page/blakelye-page.component';
import { GcgGroupComponent } from './pages/case-study/gcg-group/gcg-group.component';
import { TestAnimComponent } from './components/test-anim/test-anim.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { H1Component } from './components/h1/h1.component';
import { TokenGeneratorComponent } from './pages/case-study/token-generator/token-generator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ColorScrollTransitionComponent } from './color-scroll-transition/color-scroll-transition.component';
import { HireUsComponent } from './components/hire-us/hire-us.component';
import { PsLogoComponent } from './components/ps-logo/ps-logo.component';
import { BurgerComponent } from './burger/burger.component';
import { MenuCancelComponent } from './components/menu-cancel/menu-cancel.component';
import { ButtonArrowComponent } from './components/button-arrow/button-arrow.component';
import { TestHeaderComponent } from './test-header/test-header.component';
import { HeaderAnimtionComponent } from './header-animtion/header-animtion.component';
import { HelperService } from './shared/helper.service';
import { OnixCapitalComponent } from './pages/case-study/onix-capital/onix-capital.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HeaderComponent,
    TopAnimComponent,
    ScrollPosDetectorComponent,
    FooterComponent,
    SystemPageComponent,
    MainPageComponent,
    IntroComponent,
    TopBlockComponent,
    ContactPageComponent,
    InputDirectiveComponent,
    SquareImgAnimComponent,
    WorksPageComponent,
    AgencyPageComponent,
    MemberModalComponent,
    CaseStudyPageComponent,
    BlakelyePageComponent,
    GcgGroupComponent,

    TestAnimComponent,

    H1Component,

    TokenGeneratorComponent,

    ColorScrollTransitionComponent,

    HireUsComponent,

    PsLogoComponent,

    BurgerComponent,

    MenuCancelComponent,

    ButtonArrowComponent,

    TestHeaderComponent,

    HeaderAnimtionComponent,

    OnixCapitalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularSvgIconModule,
    HttpClientModule,
    SwiperModule,
    Select2Module,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  providers: [HelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }


