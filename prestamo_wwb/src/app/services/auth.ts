import { Injectable } from '@angular/core';

import { Usuario }
from '../core/models/usuario.model';

import {
  USUARIOS
} from '../data/mock-usuarios';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarios: Usuario[] = [];

  constructor() {

    const usuariosGuardados =
      localStorage.getItem('usuarios');

    if (usuariosGuardados) {

      this.usuarios =
        JSON.parse(
          usuariosGuardados
        );

    } else {

      this.usuarios =
        [...USUARIOS];

      localStorage.setItem(
        'usuarios',

        JSON.stringify(
          this.usuarios
        )
      );
    }
  }

  login(
    correo: string,
    password: string
  ): Usuario | null {

    const usuario =
      this.usuarios.find(

        user =>

          user.correo === correo &&

          user.password === password
      );

    if (usuario) {

      localStorage.setItem(

        'usuario',

        JSON.stringify(usuario)
      );

      return usuario;
    }

    return null;
  }

  registrar(
    usuario: Usuario
  ): boolean {

    const existe =
      this.usuarios.find(

        user =>
          user.correo ===
          usuario.correo
      );

    if (existe) {
      return false;
    }

    this.usuarios.push(usuario);

    localStorage.setItem(

      'usuarios',

      JSON.stringify(
        this.usuarios
      )
    );

    return true;
  }

  obtenerUsuarioSesion():
  Usuario | null {

    const usuario =
      localStorage.getItem(
        'usuario'
      );

    if (!usuario) {
      return null;
    }

    return JSON.parse(usuario);
  }

  logout(): void {

    localStorage.removeItem(
      'usuario'
    );
  }
}