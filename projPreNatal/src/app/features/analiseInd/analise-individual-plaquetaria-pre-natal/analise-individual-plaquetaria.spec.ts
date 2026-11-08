import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnaliseIndividualPlaquetaria } from './analise-individual-plaquetaria';

describe('AnaliseIndividualPlaquetaria', () => {
  let component: AnaliseIndividualPlaquetaria;
  let fixture: ComponentFixture<AnaliseIndividualPlaquetaria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnaliseIndividualPlaquetaria]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AnaliseIndividualPlaquetaria);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
