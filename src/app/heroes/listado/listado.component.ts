import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'];
  heroeBorrado : string = '';
  estado: string = 'false';


borrarHeroe(){
  this.heroeBorrado = this.heroes.shift() || '';

}


}

