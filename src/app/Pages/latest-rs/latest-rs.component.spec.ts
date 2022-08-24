import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestRSComponent } from './latest-rs.component';

describe('LatestRSComponent', () => {
  let component: LatestRSComponent;
  let fixture: ComponentFixture<LatestRSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestRSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestRSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
