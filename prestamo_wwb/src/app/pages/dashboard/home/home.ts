import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  Router,
  RouterLink
} from '@angular/router';

import { EQUIPOS }
from '../../../data/mock-equipos';

import { PrestamoService }
from '../../../services/prestamo';

import { AuthService }
from '../../../services/auth';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  usuario = JSON.parse(
    localStorage.getItem('usuario') || '{}'
  );

  categorias = [
    'Laptops',
    'Monitores',
    'Tablets',
    'Mouse',
    'Teclado'
  ];

  marcas = [
    'Samsung',
    'HP',
    'Lenovo',
    'Asus',
    'Acer'
  ];

  categoriaSeleccionada = '';

  marcaSeleccionada = '';

  busqueda = '';

  equipos = EQUIPOS;

  modalAbierto = false;

  equipoSeleccionado: any = null;

  nombrePersona = '';

  cargo = '';

  fechaInicio = '';

  fechaFin = '';

  constructor(

    private prestamoService:
    PrestamoService,

    private authService:
    AuthService,

    private router: Router

  ) {}

  get equiposFiltrados() {

    return this.equipos.filter(equipo => {

      const coincideBusqueda =

        equipo.nombre
          .toLowerCase()
          .includes(
            this.busqueda.toLowerCase()
          );

      const coincideCategoria =

        !this.categoriaSeleccionada ||

        equipo.categoria ===
        this.categoriaSeleccionada;

      const coincideMarca =

        !this.marcaSeleccionada ||

        equipo.marca ===
        this.marcaSeleccionada;

      return (

        coincideBusqueda &&
        coincideCategoria &&
        coincideMarca

      );

    });
  }

  seleccionarCategoria(
    categoria: string
  ): void {

    this.categoriaSeleccionada =
      categoria;

    this.marcaSeleccionada = '';
  }

  seleccionarMarca(
    marca: string
  ): void {

    this.marcaSeleccionada =
      marca;
  }

  abrirModal(
    equipo: any
  ): void {

    if (
      equipo.estado !==
      'DISPONIBLE'
    ) {

      alert(
        'Equipo no disponible'
      );

      return;
    }

    this.equipoSeleccionado =
      equipo;

    this.modalAbierto = true;
  }

  get fechaMinima(): string {

    return new Date()
      .toISOString()
      .split('T')[0];
  }

  solicitarPrestamo(): void {

    const inicio =
      new Date(this.fechaInicio);

    const fin =
      new Date(this.fechaFin);

    const diferencia =

      (
        fin.getTime() -
        inicio.getTime()
      ) /

      (
        1000 * 60 * 60 * 24
      );

    if (diferencia > 14) {

      alert(
        'El préstamo no puede superar 14 días'
      );

      return;
    }

    const confirmar = confirm(
      '¿Está seguro de solicitar este préstamo?'
    );

    if (!confirmar) {
      return;
    }

    this.prestamoService
      .agregarPrestamo({

        id: Date.now(),

        nombrePersona:
          this.nombrePersona,

        cargo: this.cargo,

        fechaInicio:
          this.fechaInicio,

        fechaFin:
          this.fechaFin,

        equipo:
          this.equipoSeleccionado,

        estado: 'ACTIVO'
      });

    this.equipoSeleccionado.estado =
      'PRESTADO';

    alert(
      'Recoger en Punto TI - Piso 2'
    );

    this.modalAbierto = false;
  }

  logout(): void {

    this.authService.logout();

    this.router.navigate(['/']);
  }
}
