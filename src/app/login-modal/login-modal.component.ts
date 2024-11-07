import { Component, OnInit, RendererFactory2, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.css'
})
export class LoginModalComponent implements OnInit {

  constructor(private rendererFactory: RendererFactory2) {
  }

  ngOnInit(): void {
    let renderer = this.rendererFactory.createRenderer(document, {
      data: {}, encapsulation: ViewEncapsulation.None, id: '', styles: []
    });

    let link = renderer.createElement('link');
    renderer.setAttribute(link, 'rel', 'preconnect');
    renderer.setAttribute(link, 'href', 'https://fonts.googleapis.com');
    renderer.appendChild(document.head, link);

    link = renderer.createElement('link');
    renderer.setAttribute(link, 'rel', 'preconnect');
    renderer.setAttribute(link, 'href', 'https://fonts.gstatic.com');
    renderer.setAttribute(link, 'crossorigin', '');
    renderer.appendChild(document.head, link);

    link = renderer.createElement('link');
    renderer.setAttribute(link, 'rel', 'stylesheet');
    renderer.setAttribute(link, 'href', 'https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700&family=Rokkitt:wght@600;700&display=swap');
    renderer.appendChild(document.head, link);

    renderer.destroy();

    document.documentElement.style.setProperty('--font-mono', 'Rokkitt, monospace');
    document.documentElement.style.setProperty('--font-sans', 'Mulish, sans-serif');
  }
}
