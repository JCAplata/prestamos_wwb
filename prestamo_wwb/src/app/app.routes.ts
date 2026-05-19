import { Routes } from '@angular/router';

import { Login } from './pages/auth/login/login';
import { Home } from './pages/dashboard/home/home';

export const routes: Routes = [

  {
    path: '',
    component: Login
  },

  {
    path: 'home',
    component: Home
  }

];
