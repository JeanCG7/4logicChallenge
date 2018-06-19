import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEvaluationComponent } from './create-evaluation.component';

describe('CreateEvaluationComponent', () => {
  let component: CreateEvaluationComponent;
  let fixture: ComponentFixture<CreateEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
