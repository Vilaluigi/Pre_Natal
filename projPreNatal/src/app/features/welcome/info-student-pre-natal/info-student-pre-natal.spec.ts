import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoStudentPreNatal } from './info-student-pre-natal';

describe('InfoStudentPreNatal', () => {
  let component: InfoStudentPreNatal;
  let fixture: ComponentFixture<InfoStudentPreNatal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoStudentPreNatal]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InfoStudentPreNatal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
