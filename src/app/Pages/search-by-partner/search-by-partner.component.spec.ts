import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByPartnerComponent } from './search-by-partner.component';

describe('SearchByPartnerComponent', () => {
  let component: SearchByPartnerComponent;
  let fixture: ComponentFixture<SearchByPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByPartnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
