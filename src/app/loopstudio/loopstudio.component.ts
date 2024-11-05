import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, RendererFactory2, ViewChild, ViewEncapsulation } from '@angular/core';
import { BreakpointsService } from './breakpointsService';

@Component({
  selector: 'app-loopstudio',
  standalone: true,
  imports: [],
  templateUrl: './loopstudio.component.html',
  styleUrl: './loopstudio.component.css'
})
export class LoopstudioComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('menuBtn') menuBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('menuDiv') menuDiv!: ElementRef<HTMLDivElement>;


  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    if (this.menuBtn.nativeElement.classList.contains('open')) {
      if (width > this.breakpointsService.getBreakpoint('md')) {
        this.menuBtn.nativeElement.classList.toggle('open');
        this.menuDiv.nativeElement.classList.toggle('hidden');
        this.menuDiv.nativeElement.classList.toggle('flex');
      }
    }
  }

  constructor(private rendererFactory: RendererFactory2, private breakpointsService: BreakpointsService) {
  }

  handleMenuClick = (event: Event) => {
    this.menuBtn.nativeElement.classList.toggle('open');
    this.menuDiv.nativeElement.classList.toggle('hidden');
    this.menuDiv.nativeElement.classList.toggle('flex');
  };

  ngAfterViewInit(): void {
    this.menuBtn.nativeElement.addEventListener('click', this.handleMenuClick);
  }

  ngOnInit(): void {
    let renderer = this.rendererFactory.createRenderer(document, {
      data: {}, encapsulation: ViewEncapsulation.None, id: '', styles: []
    });

    let link = renderer.createElement('link');
    renderer.setAttribute(link, 'rel', 'stylesheet');
    renderer.setAttribute(link, 'href', 'https://fonts.googleapis.com/css2?family=Alata&family=Josefin+Sans:wght@300&display=swap');
    renderer.appendChild(document.head, link);

    renderer.destroy();

    document.documentElement.style.setProperty('--font-sans', 'Josefin Sans, sans-serif');
  }

  ngOnDestroy() {
    // Remove the event listener to avoid memory leaks
    this.menuBtn.nativeElement.removeEventListener('click', this.handleMenuClick);
  }

}
