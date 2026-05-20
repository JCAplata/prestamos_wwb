import { Injectable } from '@angular/core';

import { Prestamo } from '../core/models/prestamo.model';

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {

  private prestamos: Prestamo[] = [];

  constructor() {

    const guardados =
      localStorage.getItem('prestamos');

    this.prestamos =
      guardados
        ? JSON.parse(guardados)
        : [];
  }

  obtenerPrestamos(): Prestamo[] {
    return this.prestamos;
  }

  agregarPrestamo(
    prestamo: Prestamo
  ): void {

    this.prestamos.push(prestamo);

    localStorage.setItem(
      'prestamos',
      JSON.stringify(this.prestamos)
    );
  }
}
