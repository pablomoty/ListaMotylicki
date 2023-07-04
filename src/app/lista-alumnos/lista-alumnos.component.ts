import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent {
  listaAlumnos: any[] = [
    { nombre: 'Julian Alvarez', nota: 8 },
    { nombre: 'Nicolas Otamendi', nota: 4 },
    { nombre: 'Lionel Messi', nota: 10 },
    { nombre: 'Leandro Paredes', nota: 5 },
    { nombre: 'Nicolas Tagliafico', nota: 7 }
  ];
}
