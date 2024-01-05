// app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormulaComponent } from './formula/formula.component';

const routes: Routes = [
  { path: '', redirectTo: '/formula', pathMatch: 'full' },
  { path: 'formula', component: FormulaComponent },
  // ... otras rutas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
