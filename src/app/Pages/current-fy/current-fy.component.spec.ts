import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentFYComponent } from './current-fy.component';

describe('CurrentFYComponent', () => {
  let component: CurrentFYComponent;
  let fixture: ComponentFixture<CurrentFYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentFYComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentFYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
