import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomeButtonComponent } from '../home-button/home-button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    HomeButtonComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    document.documentElement.style.setProperty('--font-sans', `
      ui-sans-serif,
      system-ui,
      sans-serif,
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      "Noto Color Emoji"
    `);

    document.documentElement.style.setProperty('--font-mono', `
      ui-monospace,
      SFMono-Regular,
      Menlo,
      Monaco,
      Consolas,
      "Liberation Mono",
      "Courier New",
      monospace
    `);
  }

}
