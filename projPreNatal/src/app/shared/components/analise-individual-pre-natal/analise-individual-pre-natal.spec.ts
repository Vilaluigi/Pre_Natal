import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnaliseIndividualPreNatal } from './analise-individual-pre-natal';

describe('AnaliseIndividualPreNatal', () => {
  let component: AnaliseIndividualPreNatal;
  let fixture: ComponentFixture<AnaliseIndividualPreNatal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnaliseIndividualPreNatal]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AnaliseIndividualPreNatal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
