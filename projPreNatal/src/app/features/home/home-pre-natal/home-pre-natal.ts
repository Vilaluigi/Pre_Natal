import { Component, OnInit, signal } from '@angular/core';
import { MainLayoutPreNatal } from '../../../shared/components/main-layout-pre-natal/main-layout-pre-natal';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ButtonPreNatal } from '../../../shared/components/button-pre-natal/button-pre-natal';
import { FormArray, FormControl, ReactiveFormsModule } from '@angular/forms';
import { UserSession } from '../../../core/services/user-session';
import { dadosSession } from '../../../core/services/user-session.model';
@Component({
  imports: [MainLayoutPreNatal, MatFormFieldModule, MatSelectModule, ButtonPreNatal,ReactiveFormsModule,],
  selector: 'app-home-pre-natal',
  styleUrl: './home-pre-natal.css',
  templateUrl: './home-pre-natal.html',
})
export class HomePreNatal implements OnInit {
  copiaSession:dadosSession
  constructor(private userSession:UserSession){
    this.copiaSession = this.userSession.session
  }
  ArrayPacientes = new FormArray([
    new FormControl(''),
    new FormControl(''),
    new FormControl('')
  ])
  dadosPacientes = signal([
    {
      idPaciente:1,
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
      idPaciente:2,
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
      idPaciente:3,
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
   this.ArrayPacientes.valueChanges.subscribe(item=>{
     
     let indice =  item.findIndex(i => i !== '' )
     console.log("olha",item.findIndex(i => i !== '' ));

     
    this.copiaSession.dadosTrimestre.nomePaciente = this.dadosPacientes()[indice].nomePaciente
    this.copiaSession.dadosTrimestre.numeroTrimestre = this.ArrayPacientes.at(indice).value as string
    this.userSession.session = this.copiaSession
     console.log("teste",this.userSession.session);
     
      
    })
  }

  pegarForControlCorreto(indice:number):FormControl{

    return this.ArrayPacientes.at(indice) 
  }
}
