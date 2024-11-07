import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, RendererFactory2, ViewChild, ViewEncapsulation } from '@angular/core';
import { BreakpointsService } from '../loopstudio/breakpointsService';

@Component({
  selector: 'app-bookmark',
  standalone: true,
  imports: [],
  templateUrl: './bookmark.component.html',
  styleUrl: './bookmark.component.css'
})
export class BookmarkComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('menuBtn') menuBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('menuDiv') menuDiv!: ElementRef<HTMLDivElement>;
  @ViewChild('logoImg') logoImg!: ElementRef<HTMLImageElement>;

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    if (this.menuBtn.nativeElement.classList.contains('open')) {
      if (width > this.breakpointsService.getBreakpoint('lg')) {
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
    this.logoImg.nativeElement.classList.toggle('set');

    if (this.menuDiv.nativeElement.classList.contains('flex')) {
      this.logoImg.nativeElement.setAttribute('src', 'assets/bookmark/images/logo-bookmark-footer.svg');
    } else {
      this.logoImg.nativeElement.setAttribute('src', 'assets/bookmark/images/logo-bookmark.svg');
    }
  };

  handleTabClick(event: Event) {
    let target = (event.target as Element);

    let dataTarget = target.attributes.getNamedItem('data-target');
    if (dataTarget) {
      let panel: string = dataTarget.value;
      let panels = document.getElementsByClassName('panel');
      for (let i = 0; i < panels.length; i++) {
        if (panels[i].classList.contains(panel)) {
          panels[i].classList.remove('hidden');
        } else {
          panels[i].classList.add('hidden');
        }
      }

      let tabBorders = document.getElementsByClassName('tab-border');
      for (let i = 0; i < tabBorders.length; i++) {
        if (tabBorders[i].attributes.getNamedItem('data-target')?.value === panel) {
          tabBorders[i].classList.add('border-softRed0');
          tabBorders[i].classList.add('border-b-4');
        } else {
          tabBorders[i].classList.remove('border-softRed0');
          tabBorders[i].classList.remove('border-b-4');
        }
      }
    }
  }

  ngAfterViewInit(): void {
    this.menuBtn.nativeElement.addEventListener('click', this.handleMenuClick);
  }

  ngOnInit(): void {
    let renderer = this.rendererFactory.createRenderer(document, {
      data: {}, encapsulation: ViewEncapsulation.None, id: '', styles: []
    });

    let link = renderer.createElement('link');
    renderer.setAttribute(link, 'rel', 'stylesheet');
    renderer.setAttribute(link, 'href', 'https://fonts.googleapis.com/css2?family=Rubik:wght@400;600;700&display=swap');
    renderer.appendChild(document.head, link);

    renderer.destroy();

    document.documentElement.style.setProperty('--font-sans', 'Rubik, sans-serif');
    // document.documentElement.classList.add('scroll-smooth');
  }

  ngOnDestroy() {
    // Remove the event listener to avoid memory leaks
    this.menuBtn.nativeElement.removeEventListener('click', this.handleMenuClick);
  }

}
