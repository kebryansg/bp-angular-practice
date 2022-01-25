import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {AcumuladorComponent} from './acumulador/acumulador.component';
import {CronometroComponent} from './cronometro/cronometro.component';

@NgModule({
  declarations: [
    AppComponent,
    AcumuladorComponent,
    CronometroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
