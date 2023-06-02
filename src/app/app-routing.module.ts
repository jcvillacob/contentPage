import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SoftwareComponent } from './components/software/software.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContratacionesComponent } from './components/contrataciones/contrataciones.component';
import { RespaldoComponent } from './components/respaldo/respaldo.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent},
  { path: 'software', component: SoftwareComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'contrataciones', component: ContratacionesComponent},
  { path: 'respaldo', component: RespaldoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
