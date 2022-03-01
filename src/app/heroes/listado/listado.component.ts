import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {


  heroes: string[] = ['Batman', 'Superman', 'Wonder Woman', 'Flash', 'Cyborg', 'Acuaman'];
  heroesRetirados: string[] = [];

  constructor() { }


  ngOnInit(): void {
  }

  borrarHeroe(heroe: string) {
    let index = this.heroes.findIndex(x => x === heroe);

    let retirado = this.heroes.splice(index, 1);
    this.heroesRetirados.push(retirado[0]);
  }

  reincorporar(retirado: string) {
    let index = this.heroesRetirados.findIndex(x => x === retirado);
    let reincorporado = this.heroesRetirados.splice(index, 1);
    this.heroes.push(reincorporado[0]);
  }

}
