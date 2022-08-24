import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousFYComponent } from './previous-fy.component';

describe('PreviousFYComponent', () => {
  let component: PreviousFYComponent;
  let fixture: ComponentFixture<PreviousFYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousFYComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousFYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
