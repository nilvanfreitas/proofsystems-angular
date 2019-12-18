import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDirectiveComponent } from './input-directive.component';

describe('InputDirectiveComponent', () => {
  let component: InputDirectiveComponent;
  let fixture: ComponentFixture<InputDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
