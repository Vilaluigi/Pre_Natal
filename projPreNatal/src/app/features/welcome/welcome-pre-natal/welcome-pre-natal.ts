import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserSession } from '../../../core/services/user-session';

@Component({
  imports: [NgOptimizedImage, RouterLink],
  selector: 'app-welcome-pre-natal',
  styleUrl: './welcome-pre-natal.css',
  templateUrl: './welcome-pre-natal.html',
})
export class WelcomePreNatal implements OnInit {
  constructor(private session:UserSession){}

  ngOnInit(): void {
  console.log("deixa eu ver se funciona");
  this.session.gerarSessao()
  
  }
}
