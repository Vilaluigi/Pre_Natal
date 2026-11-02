import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnaliseIndividualEritrogramaPreNatal } from './analise-individual-eritrograma-pre-natal';

describe('AnaliseIndividualEritrogramaPreNatal', () => {
  let component: AnaliseIndividualEritrogramaPreNatal;
  let fixture: ComponentFixture<AnaliseIndividualEritrogramaPreNatal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnaliseIndividualEritrogramaPreNatal]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AnaliseIndividualEritrogramaPreNatal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
