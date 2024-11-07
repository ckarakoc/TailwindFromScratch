import { AfterViewInit, Component, ElementRef, OnInit, RendererFactory2, ViewChild, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fylo',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './fylo.component.html',
  styleUrl: './fylo.component.css'
})
export class FyloComponent implements OnInit, AfterViewInit {
  @ViewChild('themeToggleBtn') themeToggleBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('lightIcon') lightIcon!: ElementRef<SVGElement>;
  @ViewChild('darkIcon') darkIcon!: ElementRef<SVGElement>;

  constructor(private rendererFactory: RendererFactory2) {
  }


  ngAfterViewInit(): void {
    // set initial icon to either light/dark
    if (localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      // if dark mode, show light icon
      this.lightIcon.nativeElement.classList.remove('hidden');
      document.documentElement.classList.add('dark');
    } else {
      this.darkIcon.nativeElement.classList.remove('hidden');
      document.documentElement.classList.remove('dark');
    }

    this.themeToggleBtn.nativeElement.addEventListener('click', (event: Event) => {
      this.darkIcon.nativeElement.classList.toggle('hidden');
      this.lightIcon.nativeElement.classList.toggle('hidden');

      if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
          localStorage.setItem('color-theme', 'dark');
          document.documentElement.classList.add('dark');
        } else {
          localStorage.setItem('color-theme', 'light');
          document.documentElement.classList.remove('dark');
        }
      } else {
        if (document.documentElement.classList.contains('dark')) {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('color-theme', 'light');
        } else {
          document.documentElement.classList.add('dark');
          localStorage.setItem('color-theme', 'dark');
        }
      }
    });
  }

  ngOnInit(): void {
    let renderer = this.rendererFactory.createRenderer(document, {
      data: {}, encapsulation: ViewEncapsulation.None, id: '', styles: []
    });

    let link = renderer.createElement('link');
    renderer.setAttribute(link, 'rel', 'stylesheet');
    renderer.setAttribute(link, 'href', 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Raleway:ital,wght@0,400;0,700;1,400&display=swap');
    renderer.appendChild(document.head, link);

    renderer.destroy();

    document.documentElement.style.setProperty('--font-sans', 'Raleway, sans-serif');
    document.documentElement.classList.add('scroll-smooth');
  }

}
