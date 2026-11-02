import { Component, signal } from '@angular/core';
import { MainLayoutPreNatal } from '../../../shared/components/main-layout-pre-natal/main-layout-pre-natal';
import { AnaliseIndividualPreNatal } from '../../../shared/components/analise-individual-pre-natal/analise-individual-pre-natal';
import { HemogramaPacientes } from '../../mocks/hemograma.mock';
@Component({
  imports: [MainLayoutPreNatal, AnaliseIndividualPreNatal],
  selector: 'app-analise-individual-leucograma-pre-natal',
  styleUrl: './analise-individual-leucograma-pre-natal.css',
  templateUrl: './analise-individual-leucograma-pre-natal.html',
})
export class AnaliseIndividualLeucogramaPreNatal {
  HemogramaPacientes = signal(HemogramaPacientes[0].leucograma)
  
}
