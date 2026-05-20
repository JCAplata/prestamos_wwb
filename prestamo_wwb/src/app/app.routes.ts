import { Routes } from '@angular/router';

import { Login }
from './pages/auth/login/login';

import { Home }
from './pages/dashboard/home/home';

import { ListaPrestamos }
from './pages/mis-prestamos/lista-prestamos/lista-prestamos';

export const routes: Routes = [

  {
    path: '',
    component: Login
  },

  {
    path: 'home',
    component: Home
  },

  {
    path: 'mis-prestamos',
    component:
      ListaPrestamos
  }
];
