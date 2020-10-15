import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedivButtonComponent } from './mediv-button.component';

describe('MedivButtonComponent', () => {
  let component: MedivButtonComponent;
  let fixture: ComponentFixture<MedivButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedivButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedivButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
