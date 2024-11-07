import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, RendererFactory2, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgStyle } from '@angular/common';
import { BreakpointsService } from '../loopstudio/breakpointsService';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shortly',
  standalone: true,
  imports: [
    NgStyle,
    RouterLink
  ],
  templateUrl: './shortly.component.html',
  styleUrl: './shortly.component.css'
})
export class ShortlyComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('linkForm') linkForm!: ElementRef<HTMLFormElement>;
  @ViewChild('linkInput') input!: ElementRef<HTMLInputElement>;
  @ViewChild('errMsg') errMsg!: ElementRef<HTMLDivElement>;
  @ViewChild('menuBtn') menuBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('menuDiv') menuDiv!: ElementRef<HTMLDivElement>;


  constructor(private rendererFactory: RendererFactory2, private breakpointsService: BreakpointsService) {
  }

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


  handleMenuClick = (event: Event) => {
    this.menuBtn.nativeElement.classList.toggle('open');
    this.menuDiv.nativeElement.classList.toggle('hidden');
    this.menuDiv.nativeElement.classList.toggle('flex');
  };

  private validURL(str: string) {
    var pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
      '(\\?[;&a-z\\d%_.~+=-]*)?' +
      '(\\#[-a-z\\d_]*)?$',
      'i'
    );
    return pattern.test(str);
  }

  formSubmit = (event: Event) => {
    event.preventDefault();

    if (this.input.nativeElement.value === '') {
      this.errMsg.nativeElement.innerHTML = 'Please enter something';
      this.input.nativeElement.classList.add('border-shortly-red');
    } else if (!this.validURL(this.input.nativeElement.value)) {
      this.errMsg.nativeElement.innerHTML = 'Please enter a valid url';
      this.input.nativeElement.classList.add('border-shortly-red');
    } else {
      this.errMsg.nativeElement.innerHTML = '';
      this.input.nativeElement.classList.remove('border-shortly-red');
    }
  };

  ngAfterViewInit(): void {
    this.linkForm.nativeElement.addEventListener('submit', this.formSubmit);
    this.menuBtn.nativeElement.addEventListener('click', this.handleMenuClick);
  }

  ngOnInit(): void {
    let renderer = this.rendererFactory.createRenderer(document, {
      data: {}, encapsulation: ViewEncapsulation.None, id: '', styles: []
    });

    let link = renderer.createElement('link');
    renderer.setAttribute(link, 'rel', 'stylesheet');
    renderer.setAttribute(link, 'href', 'https://fonts.googleapis.com/css2?family=Alata&family=Poppins:wght@400;500;700&display=swap');
    renderer.appendChild(document.head, link);

    renderer.destroy();

    document.documentElement.style.setProperty('--font-sans', 'Poppins, sans-serif');
  }

  ngOnDestroy(): void {
    this.linkForm.nativeElement.removeEventListener('submit', this.formSubmit);
    this.menuBtn.nativeElement.removeEventListener('click', this.handleMenuClick);
  }
}
