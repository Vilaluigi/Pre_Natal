import { Component, signal } from '@angular/core';
import { AnaliseIndividualPreNatal } from '../../../shared/components/analise-individual-pre-natal/analise-individual-pre-natal';
import { HemogramaPacientes } from '../../mocks/hemograma.mock';

@Component({
  imports: [AnaliseIndividualPreNatal],
  selector: 'app-analise-individual-plaquetaria',
  styleUrl: './analise-individual-plaquetaria.css',
  templateUrl: './analise-individual-plaquetaria.html',
})
export class AnaliseIndividualPlaquetaria {
  HemogramaPacientes = signal(HemogramaPacientes[0].serie_plaquetaria)
  
}
