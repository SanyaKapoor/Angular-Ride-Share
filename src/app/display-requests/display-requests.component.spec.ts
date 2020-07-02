import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayRequestsComponent } from './display-requests.component';

describe('DisplayRequestsComponent', () => {
  let component: DisplayRequestsComponent;
  let fixture: ComponentFixture<DisplayRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
