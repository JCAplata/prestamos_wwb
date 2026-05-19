export interface Usuario {

  id: number;

  nombre: string;

  correo: string;

  cargo: string;

  password: string;

  rol: 'ADMIN' | 'EMPLEADO';
}