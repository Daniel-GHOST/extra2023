import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormulaComponent } from './formula.component';
import { FormsModule } from '@angular/forms';

describe('FormulaComponent', () => {
  let component: FormulaComponent;
  let fixture: ComponentFixture<FormulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaComponent ],
      imports: [ FormsModule ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default speed of light as 299792458', () => {
    expect(component.velocidadLuz).toEqual(299792458);
  });

  // Test para validar cálculo con diferentes masas
  it('should calculate energy as 0 when mass is 0', () => {
    component.masa = 0;
    component.calcularEnergia();
    expect(component.energia).toEqual(0);
  });

  it('should calculate correct energy for mass of 1kg', () => {
    component.masa = 1;
    component.calcularEnergia();
    expect(component.energia).toEqual(Math.pow(299792458, 2));
  });

  // Pruebas adicionales para diferentes valores de masa
  const testCases = [
    { masa: 2, expectedEnergia: 2 * Math.pow(299792458, 2) },
    { masa: 10, expectedEnergia: 10 * Math.pow(299792458, 2) },
    // ... otros casos de prueba
  ];

  testCases.forEach(testCase => {
    it(`should calculate correct energy for mass of ${testCase.masa}kg`, () => {
      component.masa = testCase.masa;
      component.calcularEnergia();
      expect(component.energia).toEqual(testCase.expectedEnergia);
    });
  });

  // Prueba para el método onMasaChange
  it('should update mass when onMasaChange is called', () => {
    const newMass = 5;
    component.onMasaChange({ target: { value: newMass.toString() } });
    expect(component.masa).toEqual(newMass);
  });

  // Prueba para verificar el cálculo cuando se cambia la masa a través de onMasaChange
  it('should calculate energy correctly when mass is changed', () => {
    const newMass = 3;
    component.onMasaChange({ target: { value: newMass.toString() } });
    component.calcularEnergia();
    expect(component.energia).toEqual(newMass * Math.pow(299792458, 2));
  });

  // Asegurarse de que la energía se resetea correctamente
  it('should reset energy and mass to null', () => {
    component.masa = 5;
    component.energia = 1234567890;
    component.reset();
    expect(component.masa).toBeNull();
    expect(component.energia).toBeNull();
  });
});
