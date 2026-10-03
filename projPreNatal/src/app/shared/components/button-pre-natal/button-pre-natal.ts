import { Component, input } from '@angular/core';
import { dadosButton } from './button-pre-natal.model';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-button-pre-natal',
  styleUrl: './button-pre-natal.css',
  templateUrl: './button-pre-natal.html',
})
export class ButtonPreNatal {
  
  dadosButton = input<dadosButton>()
}
