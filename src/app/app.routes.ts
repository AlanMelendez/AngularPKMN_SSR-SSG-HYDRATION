import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'about',
    loadComponent: () => import('./pages/about/about-pages.component')
  },
  {
    path: 'price',
    loadComponent: () => import('./pages/pricing/pricing-page.component')
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component')
  },
  {
    path: 'pokemons',
    loadComponent: () => import('./pages/pokemons-page/pokemons-page.component')
  },
  {
    path: '**',
    redirectTo: (state) => {
      console.log(state);
      return 'about';
    },
  }
];
