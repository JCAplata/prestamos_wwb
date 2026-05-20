import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  Router,
  RouterLink
} from '@angular/router';

import {
  PrestamoService
} from '../../../services/prestamo';

import {
  AuthService
} from '../../../services/auth';

@Component({
  selector:
    'app-lista-prestamos',

  standalone: true,

  imports: [
    CommonModule,
    RouterLink
  ],

  templateUrl:
    './lista-prestamos.html',

  styleUrl:
    './lista-prestamos.css'
})
export class ListaPrestamos {

  prestamos: any[] = [];

  usuario = JSON.parse(
    localStorage.getItem('usuario') || '{}'
  );

  constructor(

    private prestamoService:
    PrestamoService,

    private authService:
    AuthService,

    private router: Router

  ) {

    this.prestamos =
      this.prestamoService
      .obtenerPrestamos();
  }

  limpiarHistorial(): void {

    const confirmar = confirm(
      '¿Desea limpiar el historial?'
    );

    if (!confirmar) {
      return;
    }

    this.prestamos = [];

    localStorage.removeItem(
      'prestamos'
    );
  }

  logout(): void {

    this.authService.logout();

    this.router.navigate(['/']);
  }
}
