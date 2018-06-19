import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCustomersComponent } from './home-customers.component';

describe('HomeCustomersComponent', () => {
  let component: HomeCustomersComponent;
  let fixture: ComponentFixture<HomeCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
