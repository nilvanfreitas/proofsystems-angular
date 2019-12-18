import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAnimComponent } from './test-anim.component';

describe('TestAnimComponent', () => {
  let component: TestAnimComponent;
  let fixture: ComponentFixture<TestAnimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestAnimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAnimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
