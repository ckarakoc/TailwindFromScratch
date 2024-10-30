import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  // The route 'sandbox/' is already in use, by static pages
  { path: '', component: HomeComponent, pathMatch: 'full' },
];
