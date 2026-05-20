export interface Equipo {

  id: number;

  nombre: string;

  categoria: string;

  marca: string;

  imagen: string;

  estado:
    | 'DISPONIBLE'
    | 'PRESTADO'
    | 'MANTENIMIENTO'
    | 'FUERA_SERVICIO';
}