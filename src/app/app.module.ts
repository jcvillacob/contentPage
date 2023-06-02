import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FootesComponent } from './components/footes/footes.component';
import { SoftwareComponent } from './components/software/software.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContratacionesComponent } from './components/contrataciones/contrataciones.component';
import { RespaldoComponent } from './components/respaldo/respaldo.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FootesComponent,
    SoftwareComponent,
    FaqComponent,
    ContratacionesComponent,
    RespaldoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
