import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEvaluationComponent } from './home-evaluation.component';

describe('HomeEvaluationComponent', () => {
  let component: HomeEvaluationComponent;
  let fixture: ComponentFixture<HomeEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
