import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-prestamos',
  standalone: true,
  imports: [CommonModule],
  templateUrl:
    './lista-prestamos.html',
  styleUrl:
    './lista-prestamos.css'
})
export class ListaPrestamos {

  prestamos =
    JSON.parse(
      localStorage.getItem(
        'prestamos'
      ) || '[]'
    );
}
