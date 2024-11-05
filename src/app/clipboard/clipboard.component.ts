import { Component, OnInit, RendererFactory2, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-clipboard',
  standalone: true,
  imports: [],
  templateUrl: './clipboard.component.html',
  styleUrl: './clipboard.component.css',
})
export class ClipboardComponent implements OnInit {
  constructor(private rendererFactory: RendererFactory2) {  }

  ngOnInit(): void {
    let renderer = this.rendererFactory.createRenderer(document, {
      data: {}, encapsulation: ViewEncapsulation.None, id: '', styles: []
    });

    // let link = renderer.createElement('link');
    // renderer.setAttribute(link, 'rel', 'preconnect');
    // renderer.setAttribute(link, 'href', 'https://fonts.googleapis.com');
    // renderer.appendChild(document.head, link);
    //
    // link = renderer.createElement('link');
    // renderer.setAttribute(link, 'rel', 'preconnect');
    // renderer.setAttribute(link, 'href', 'https://fonts.gstatic.com');
    // renderer.setAttribute(link, 'crossorigin', '');
    // renderer.appendChild(document.head, link);

    let link = renderer.createElement('link');
    renderer.setAttribute(link, 'rel', 'stylesheet');
    renderer.setAttribute(link, 'href', 'https://fonts.googleapis.com/css2?family=Bai+Jamjuree:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Outfit:wght@100..900&display=swap');
    renderer.appendChild(document.head, link);

    renderer.destroy();

    document.documentElement.style.setProperty('--font-sans', 'Bai Jamjuree, sans-serif');
  }
}
