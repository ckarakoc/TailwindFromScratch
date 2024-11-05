import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmailSubscribeComponent } from './email-subscribe/email-subscribe.component';
import { PricingCardsComponent } from './pricing-cards/pricing-cards.component';
import { ProductModalComponent } from './product-modal/product-modal.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ClipboardComponent } from './clipboard/clipboard.component';
import { LoopstudioComponent } from './loopstudio/loopstudio.component';

export const routes: Routes = [
  // The route 'sandbox/' is already in use, by static pages
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'email-subscribe', component: EmailSubscribeComponent },
  { path: 'pricing-cards', component: PricingCardsComponent },
  { path: 'product-modal', component: ProductModalComponent },
  { path: 'login-modal', component: LoginModalComponent },
  { path: 'image-gallery', component: ImageGalleryComponent },
  { path: 'clipboard', component: ClipboardComponent },
  { path: 'loopstudio', component: LoopstudioComponent },
  { path: '**', component: PageNotFoundComponent }
];
