import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-image-gallery',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.css'
})
export class ImageGalleryComponent {

}
