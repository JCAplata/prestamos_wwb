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

    this.guardar();
  }

  marcarDevuelto(
    id: number
  ): void {

    const prestamo =
      this.prestamos.find(
        p => p.id === id
      );

    if (prestamo) {

      prestamo.estado =
        'DEVUELTO';

      prestamo.equipo.estado =
        'DISPONIBLE';

      this.guardar();
    }
  }

  verificarRetrasos(): void {

    const hoy =
      new Date();

    this.prestamos.forEach(
      prestamo => {

        const fechaFin =
          new Date(
            prestamo.fechaFin
          );

        if (
          fechaFin < hoy &&
          prestamo.estado ===
          'ACTIVO'
        ) {

          prestamo.estado =
            'RETRASADO';
        }
      }
    );

    this.guardar();
  }

  private guardar(): void {

    localStorage.setItem(
      'prestamos',
      JSON.stringify(this.prestamos)
    );
  }
}
