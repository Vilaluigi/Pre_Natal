import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import {  Router, RouterLink, RouterLinkActive } from '@angular/router';
import { UserSession } from '../../../core/services/user-session';

@Component({
  imports: [NgOptimizedImage,RouterLink,RouterLinkActive],
  selector: 'app-main-layout-pre-natal',
  styleUrl: './main-layout-pre-natal.css',
  templateUrl: './main-layout-pre-natal.html',
})
export class MainLayoutPreNatal {
  constructor(
      private service:UserSession,
      private router:Router
  ){}


  close(){
    this.service.deletaSessao()
    this.router.navigate(['/'])
  }
}
