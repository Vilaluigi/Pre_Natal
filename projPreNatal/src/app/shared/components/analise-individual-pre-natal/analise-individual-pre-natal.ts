import { Component, Input, input, OnInit, signal } from '@angular/core';
import { HemogramaPacientes } from '../../../features/mocks/hemograma.mock';
import { ButtonPreNatal } from '../button-pre-natal/button-pre-natal';
import { RouterLink } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { dadosButton } from '../button-pre-natal/button-pre-natal.model';
import { DialogPreNatal } from '../dialog-pre-natal/dialog-pre-natal';
@Component({
  imports: [ButtonPreNatal, RouterLink,MatDialogModule],
  selector: 'app-analise-individual-pre-natal',
  styleUrl: './analise-individual-pre-natal.css',
  templateUrl: './analise-individual-pre-natal.html',
})
export class AnaliseIndividualPreNatal implements OnInit {

  constructor(private dialog:MatDialog){}
  dadosAnalise = input<any>()
  rotasVoltar = input<string>()
  @Input() dadosBtn!:dadosButton  
  ngOnInit(): void {
    
    
  }
  abrirDialog(itemHemograma:any):void{
    this.dialog.open(DialogPreNatal,{
      width:'600px',
      data:{
        dados:itemHemograma,
      }
    })
  }

}
