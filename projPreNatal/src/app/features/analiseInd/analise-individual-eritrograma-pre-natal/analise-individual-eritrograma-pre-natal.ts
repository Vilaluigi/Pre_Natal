import { Component } from '@angular/core';
import { MainLayoutPreNatal } from '../../../shared/components/main-layout-pre-natal/main-layout-pre-natal';
import { AnaliseIndividualPreNatal } from '../../../shared/components/analise-individual-pre-natal/analise-individual-pre-natal';
import { HemogramaPacientes } from '../../mocks/hemograma.mock';
@Component({
  imports: [MainLayoutPreNatal, AnaliseIndividualPreNatal],
  selector: 'app-analise-individual-eritrograma-pre-natal',
  styleUrl: './analise-individual-eritrograma-pre-natal.css',
  templateUrl: './analise-individual-eritrograma-pre-natal.html',
})
export class AnaliseIndividualEritrogramaPreNatal {
  HemogramaPacientes = HemogramaPacientes[0].eritrograma
}
