import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinpoolComponent } from './joinpool.component';

describe('JoinpoolComponent', () => {
  let component: JoinpoolComponent;
  let fixture: ComponentFixture<JoinpoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinpoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinpoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
