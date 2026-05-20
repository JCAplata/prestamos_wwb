import { Equipo } from '../core/models/equipo.model';

export const EQUIPOS: Equipo[] = [

  {
    id: 1,
    nombre: 'Laptop HP EliteBook',
    categoria: 'Laptops',
    marca: 'HP',
    imagen: 'https://picsum.photos/300/200?1',
    estado: 'DISPONIBLE'
  },

  {
    id: 2,
    nombre: 'Monitor Samsung 24"',
    categoria: 'Monitores',
    marca: 'Samsung',
    imagen: 'https://picsum.photos/300/200?2',
    estado: 'PRESTADO'
  },

  {
    id: 3,
    nombre: 'Tablet Lenovo',
    categoria: 'Tablets',
    marca: 'Lenovo',
    imagen: 'https://picsum.photos/300/200?3',
    estado: 'MANTENIMIENTO'
  },

  {
    id: 4,
    nombre: 'Mouse Asus Gamer',
    categoria: 'Mouse',
    marca: 'Asus',
    imagen: 'https://picsum.photos/300/200?4',
    estado: 'FUERA_SERVICIO'
  }

];