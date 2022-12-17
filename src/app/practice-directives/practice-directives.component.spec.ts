import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeDirectivesComponent } from './practice-directives.component';

describe('PracticeDirectivesComponent', () => {
  let component: PracticeDirectivesComponent;
  let fixture: ComponentFixture<PracticeDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeDirectivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
