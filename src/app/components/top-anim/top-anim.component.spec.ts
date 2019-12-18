import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAnimComponent } from './top-anim.component';

describe('TopAnimComponent', () => {
  let component: TopAnimComponent;
  let fixture: ComponentFixture<TopAnimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopAnimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopAnimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
