import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserSession } from '../../../core/services/user-session';

@Component({
  imports: [RouterLink],
  selector: 'app-info-student-pre-natal',
  styleUrl: './info-student-pre-natal.css',
  templateUrl: './info-student-pre-natal.html',
})
export class InfoStudentPreNatal {

constructor( private userSession:UserSession){}
 teste(){
  this.userSession.gerarSessao()
  this.userSession.session
 }
}
