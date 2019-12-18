import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAnimtionComponent } from './header-animtion.component';

describe('HeaderAnimtionComponent', () => {
  let component: HeaderAnimtionComponent;
  let fixture: ComponentFixture<HeaderAnimtionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderAnimtionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAnimtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
