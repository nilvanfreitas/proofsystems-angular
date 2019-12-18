import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareImgAnimComponent } from './square-img-anim.component';

describe('SquareImgAnimComponent', () => {
  let component: SquareImgAnimComponent;
  let fixture: ComponentFixture<SquareImgAnimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquareImgAnimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareImgAnimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
