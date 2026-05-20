import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';

import { EQUIPOS }
from '../../../data/mock-equipos';

import {
  PrestamoService
} from '../../../services/prestamo';

import {
  AuthService
} from '../../../services/auth';

@Component({
  selector: 'app-dashboard-admin',

  standalone: true,

  imports: [
    CommonModule,
    FormsModule
  ],

  templateUrl:
    './dashboard-admin.html',

  styleUrl:
    './dashboard-admin.css'
})
export class DashboardAdmin {

  vista = 'agregar';

  equipos = EQUIPOS;

  prestamos: any[] = [];

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

  editando = false;

  equipoEditando: any = null;

  nuevoEquipo = {

    nombre: '',

    categoria: 'Laptops',

    marca: 'HP',

    imagen: ''

  };

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

    this.prestamoService
      .verificarRetrasos();
  }

  agregarEquipo(): void {

    if (this.editando) {

      this.equipoEditando.nombre =
        this.nuevoEquipo.nombre;

      this.equipoEditando.categoria =
        this.nuevoEquipo.categoria;

      this.equipoEditando.marca =
        this.nuevoEquipo.marca;

      this.equipoEditando.imagen =
        this.nuevoEquipo.imagen;

      this.editando = false;

      this.equipoEditando = null;

      alert(
        'Equipo actualizado'
      );

      this.limpiarFormulario();

      return;
    }

    this.equipos.push({

      id: Date.now(),

      nombre:
        this.nuevoEquipo.nombre,

      categoria:
        this.nuevoEquipo.categoria,

      marca:
        this.nuevoEquipo.marca,

      imagen:
        this.nuevoEquipo.imagen,

      estado: 'DISPONIBLE'
    });

    alert(
      'Equipo agregado'
    );

    this.limpiarFormulario();
  }

  editarEquipo(
    equipo: any
  ): void {

    this.vista = 'agregar';

    this.editando = true;

    this.equipoEditando = equipo;

    this.nuevoEquipo = {

      nombre: equipo.nombre,

      categoria:
        equipo.categoria,

      marca: equipo.marca,

      imagen: equipo.imagen
    };
  }

  eliminarEquipo(
    equipo: any
  ): void {

    const confirmar = confirm(
      '¿Está seguro de eliminar este equipo?'
    );

    if (!confirmar) {
      return;
    }

    this.equipos =
      this.equipos.filter(
        e => e.id !== equipo.id
      );

    alert(
      'Equipo eliminado'
    );
  }

  seleccionarImagen(
    event: any
  ): void {

    const archivo =
      event.target.files[0];

    if (!archivo) {
      return;
    }

    const reader =
      new FileReader();

    reader.onload = () => {

      this.nuevoEquipo.imagen =
        reader.result as string;
    };

    reader.readAsDataURL(
      archivo
    );
  }

  devolver(
    id: number
  ): void {

    this.prestamoService
      .marcarDevuelto(id);
  }

  logout(): void {

    this.authService.logout();

    this.router.navigate(['/']);
  }

  limpiarFormulario(): void {

    this.nuevoEquipo = {

      nombre: '',

      categoria: 'Laptops',

      marca: 'HP',

      imagen: ''
    };
  }
}
