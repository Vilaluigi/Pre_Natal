import { Component, signal } from '@angular/core';
import { MainLayoutPreNatal } from '../../../shared/components/main-layout-pre-natal/main-layout-pre-natal';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ButtonPreNatal } from '../../../shared/components/button-pre-natal/button-pre-natal';
@Component({
  imports: [MainLayoutPreNatal, MatFormFieldModule, MatSelectModule, ButtonPreNatal],
  selector: 'app-home-pre-natal',
  styleUrl: './home-pre-natal.css',
  templateUrl: './home-pre-natal.html',
})
export class HomePreNatal {
  dadosPacientes = signal([
    {
      nomePaciente: 'Gestação Maria',
      dadosTrimestres: [
        {
          key: "1º Trimestre",
          value: 1
        },
        {
          key: "2º Trimestre",
          value: 2
        },
        {
          key: "3º Trimestre",
          value: 3
        }
      ]
    },
    {
      nomePaciente: 'Gestação Ana',
      dadosTrimestres: [
        {
          key: "1º Trimestre",
          value: 1
        },
        {
          key: "2º Trimestre",
          value: 2
        },
        {
          key: "3º Trimestre",
          value: 3
        }
      ]
    },
    {
      nomePaciente: 'Gestação Dani',
      dadosTrimestres: [
        {
          key: "1º Trimestre",
          value: 1
        },
        {
          key: "2º Trimestre",
          value: 2
        },
        {
          key: "3º Trimestre",
          value: 3
        }
      ]
    }   
  ])
dado: any;

}
