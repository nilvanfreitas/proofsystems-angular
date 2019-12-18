import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCancelComponent } from './menu-cancel.component';

describe('MenuCancelComponent', () => {
  let component: MenuCancelComponent;
  let fixture: ComponentFixture<MenuCancelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuCancelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
