import { Component } from '@angular/core';

@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.css'],
})
export class FormulaComponent {
  masa: number = 0;
  readonly velocidadLuz: number = 299792458; // en metros por segundo
  energia: number = 0;

  constructor() {
    this.masa = 0;
    this.energia = 0;
  }

  onMasaChange(event: any) {
    this.masa = Number(event.target.value);
  }

  calcularEnergia() {
    this.energia = this.masa * Math.pow(this.velocidadLuz, 2);
  }
}
