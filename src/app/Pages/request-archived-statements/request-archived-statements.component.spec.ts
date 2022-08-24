import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestArchivedStatementsComponent } from './request-archived-statements.component';

describe('RequestArchivedStatementsComponent', () => {
  let component: RequestArchivedStatementsComponent;
  let fixture: ComponentFixture<RequestArchivedStatementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestArchivedStatementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestArchivedStatementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
