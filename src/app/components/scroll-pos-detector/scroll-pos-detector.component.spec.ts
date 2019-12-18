import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollPosDetectorComponent } from './scroll-pos-detector.component';

describe('ScrollPosDetectorComponent', () => {
  let component: ScrollPosDetectorComponent;
  let fixture: ComponentFixture<ScrollPosDetectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollPosDetectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollPosDetectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
