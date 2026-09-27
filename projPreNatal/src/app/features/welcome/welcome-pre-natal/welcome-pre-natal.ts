import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [NgOptimizedImage, RouterLink],
  selector: 'app-welcome-pre-natal',
  styleUrl: './welcome-pre-natal.css',
  templateUrl: './welcome-pre-natal.html',
})
export class WelcomePreNatal {
}
