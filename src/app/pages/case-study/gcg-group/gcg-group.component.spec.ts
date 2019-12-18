import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GcgGroupComponent } from './gcg-group.component';

describe('GcgGroupComponent', () => {
  let component: GcgGroupComponent;
  let fixture: ComponentFixture<GcgGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GcgGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GcgGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
