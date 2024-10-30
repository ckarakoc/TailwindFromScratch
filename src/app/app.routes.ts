import { Routes } from '@angular/router';

export const routes: Routes = [
  // The route 'sandbox/' is already in use, by static pages
  { path: '', redirectTo: '/sandbox', pathMatch: 'full' },
];
