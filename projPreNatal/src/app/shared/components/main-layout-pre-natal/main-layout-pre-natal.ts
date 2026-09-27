import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [NgOptimizedImage,RouterLink,RouterLinkActive],
  selector: 'app-main-layout-pre-natal',
  styleUrl: './main-layout-pre-natal.css',
  templateUrl: './main-layout-pre-natal.html',
})
export class MainLayoutPreNatal {
}
