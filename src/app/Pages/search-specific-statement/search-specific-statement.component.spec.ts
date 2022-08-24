import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSpecificStatementComponent } from './search-specific-statement.component';

describe('SearchSpecificStatementComponent', () => {
  let component: SearchSpecificStatementComponent;
  let fixture: ComponentFixture<SearchSpecificStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchSpecificStatementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSpecificStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
