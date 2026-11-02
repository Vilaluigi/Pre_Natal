import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnaliseIndividualLeucogramaPreNatal } from './analise-individual-leucograma-pre-natal';

describe('AnaliseIndividualLeucogramaPreNatal', () => {
  let component: AnaliseIndividualLeucogramaPreNatal;
  let fixture: ComponentFixture<AnaliseIndividualLeucogramaPreNatal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnaliseIndividualLeucogramaPreNatal]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AnaliseIndividualLeucogramaPreNatal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
