import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Thor', 'Iron Men', 'Spiderman', 'Capitan America', 'Hulk'];
  heroeBorrado: string = '';

  borrarHeroe() {
    //Elimina el ultimo item del array
    this.heroeBorrado = this.heroes.pop() || '';
  }
}
