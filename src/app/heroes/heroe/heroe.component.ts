import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html',
    styleUrls: ['../../app.component.css']
})
export class HeroeComponent {


    nombre: string = 'Batman';
    edad: number = 30;


    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }


    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(): void {
        this.nombre = 'Robin';
    }
    cambiarEdad(): void {
        this.edad = 20;
    }
}