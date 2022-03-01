import { Component } from "@angular/core";


@Component({
    selector: 'app-contador',
    template: `
        <h1> {{titulo}} </h1>

        <h3>La base es: <strong>{{base}} </strong></h3>


        <button (click)="acumular(base)"> + {{base}} </button>
        &nbsp;
        <span>{{contador}}</span>
        &nbsp;
        <button (click)="acumular(-base)"> - {{base}} </button>

    `,
    styleUrls: ['../../app.component.css']
})
export class ContadorComponent {

    titulo: string = 'Contador App';

    contador: number = 0;

    base: number = 5;

    // aumentar() {
    //   this.contador += 1;
    // }

    // disminuir() {
    //   this.contador -= 1;
    // }

    acumular(valor: number) {
        this.contador += valor;
    }


}