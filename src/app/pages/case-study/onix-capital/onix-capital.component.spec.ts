import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnixCapitalComponent } from './onix-capital.component';

describe('OnixCapitalComponent', () => {
  let component: OnixCapitalComponent;
  let fixture: ComponentFixture<OnixCapitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnixCapitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnixCapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
