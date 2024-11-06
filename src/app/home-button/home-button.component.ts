import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-button',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './home-button.component.html',
  styleUrl: './home-button.component.css'
})
export class HomeButtonComponent {
  @Input() routelink: string = '';
  @Input() assetLink: string = 'assets/404.png';
  @Input() name = '';
}
