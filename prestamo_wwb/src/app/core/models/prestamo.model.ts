import { Equipo } from './equipo.model';

export interface Prestamo {

  id: number;

  nombrePersona: string;

  cargo: string;

  fechaInicio: string;

  fechaFin: string;

  equipo: Equipo;

  estado:
    | 'ACTIVO'
    | 'DEVUELTO'
    | 'RETRASADO';
}