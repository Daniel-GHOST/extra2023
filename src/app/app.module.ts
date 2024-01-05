import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KarmaComponent } from './karma/karma.component';
import { FormulaComponent } from './formula/formula.component';

@NgModule({
  declarations: [
    AppComponent,
    KarmaComponent,
    FormulaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
