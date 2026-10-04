import { Component } from '@angular/core';
import { MainLayoutPreNatal } from '../../../shared/components/main-layout-pre-natal/main-layout-pre-natal';
import { HemogramaPacientes } from '../../mocks/hemograma.mock';
import { ButtonPreNatal } from '../../../shared/components/button-pre-natal/button-pre-natal';
import { UserSession } from '../../../core/services/user-session';

@Component({
  imports: [MainLayoutPreNatal, ButtonPreNatal],
  selector: 'app-home-hemograma-pre-natal',
  styleUrl: './home-hemograma-pre-natal.css',
  templateUrl: './home-hemograma-pre-natal.html',
})
export class HomeHemogramaPreNatal {

  constructor(private userSession:UserSession){}
  HemogramaPacientes = HemogramaPacientes
}
