import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorScrollTransitionComponent } from './color-scroll-transition.component';

describe('ColorScrollTransitionComponent', () => {
  let component: ColorScrollTransitionComponent;
  let fixture: ComponentFixture<ColorScrollTransitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorScrollTransitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorScrollTransitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
