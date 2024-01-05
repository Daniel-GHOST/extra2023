import { Component } from '@angular/core';

@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.css']
})
export class FormulaComponent {
  masa: number;
  velocidadLuz = 299792458; // m/s
  energia: number;

  constructor() { }

  calcularEnergia(): void {
    this.energia = this.masa * Math.pow(this.velocidadLuz, 2);
  }
}
