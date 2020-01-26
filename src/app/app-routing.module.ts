import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BaseComponent} from './base/base.component';
import {HomeComponent} from './home/home.component';
import {EstudianteComponent} from './estudiante/estudiante.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { ConvenioComponent } from './convenio/convenio.component';
import { EntidadComponent } from './entidad/entidad.component';
import { TutorComponent } from './tutor/tutor.component';
import { EstudiaejeComponent } from './estudiaeje/estudiaeje.component';
import { CalificacionComponent } from './calificacion/calificacion.component';
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: HomeComponent.URL},
  {path: HomeComponent.URL, component: HomeComponent},
  {
    path: BaseComponent.URL, component: BaseComponent,
    children: [
      {path: EstudianteComponent.URL, component: EstudianteComponent}, {path: SolicitudComponent.URL, component: SolicitudComponent}, {path: ConvenioComponent.URL, component: ConvenioComponent}, {path: EntidadComponent.URL, component: EntidadComponent}, {path: TutorComponent.URL, component: TutorComponent}, {path: EstudiaejeComponent.URL, component: EstudiaejeComponent}, {path: CalificacionComponent.URL, component: CalificacionComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
