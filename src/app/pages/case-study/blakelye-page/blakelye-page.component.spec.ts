import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlakelyePageComponent } from './blakelye-page.component';

describe('BlakelyePageComponent', () => {
  let component: BlakelyePageComponent;
  let fixture: ComponentFixture<BlakelyePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlakelyePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlakelyePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
