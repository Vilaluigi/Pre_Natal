import { Component, OnInit, signal } from '@angular/core';
import { MainLayoutPreNatal } from '../../../shared/components/main-layout-pre-natal/main-layout-pre-natal';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ButtonPreNatal } from '../../../shared/components/button-pre-natal/button-pre-natal';
import { FormArray, FormControl, ReactiveFormsModule } from '@angular/forms';
@Component({
  imports: [MainLayoutPreNatal, MatFormFieldModule, MatSelectModule, ButtonPreNatal,ReactiveFormsModule,],
  selector: 'app-home-pre-natal',
  styleUrl: './home-pre-natal.css',
  templateUrl: './home-pre-natal.html',
})
export class HomePreNatal implements OnInit {
  ArrayPacientes = new FormArray([
    new FormControl(''),
    new FormControl(''),
    new FormControl('')
  ])
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

  ngOnInit(): void {
    this.ArrayPacientes.valueChanges.subscribe(item =>{
      console.log("bora ver",item.filter(it=> it !== ''), );
      let valor = item.findIndex(it=> it !== '')
      console.log("olha",this.dadosPacientes()[valor].nomePaciente);
      
      
    })
  }
}
