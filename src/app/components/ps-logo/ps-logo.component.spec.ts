import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsLogoComponent } from './ps-logo.component';

describe('PsLogoComponent', () => {
  let component: PsLogoComponent;
  let fixture: ComponentFixture<PsLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
