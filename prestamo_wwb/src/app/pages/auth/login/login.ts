import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';

import { AuthService }
from '../../../services/auth';

@Component({
  selector: 'app-login',

  standalone: true,

  imports: [
    CommonModule,
    FormsModule
  ],

  templateUrl: './login.html',

  styleUrl: './login.css'
})
export class Login {

  esRegistro = false;

  nombre = '';

  correo = '';

  cargo = '';

  password = '';

  constructor(

    private authService:
    AuthService,

    private router: Router

  ) {}

  login(): void {

    const usuario =
      this.authService.login(

        this.correo,

        this.password
      );

    if (!usuario) {

      alert(
        'Credenciales incorrectas'
      );

      return;
    }

    if (usuario.rol === 'ADMIN') {

      this.router.navigate([
        '/admin'
      ]);

    } else {

      this.router.navigate([
        '/home'
      ]);
    }
  }

  registrar(): void {

    const registrado =
      this.authService.registrar({

        id: Date.now(),

        nombre: this.nombre,

        correo: this.correo,

        cargo: this.cargo,

        password: this.password,

        rol: 'EMPLEADO'
      });

    if (!registrado) {

      alert(
        'El correo ya existe'
      );

      return;
    }

    alert(
      'Usuario registrado correctamente'
    );

    this.esRegistro = false;
  }
}
