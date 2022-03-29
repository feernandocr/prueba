import { FormComponentComponent } from './form-component/form-component.component';
import { PermisosComponent } from './permisos/permisos.component';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{path : 'permisos', component:PermisosComponent },
{path: '',redirectTo: 'empleados' ,pathMatch: 'full'},
{path:  'form-component', component : FormComponentComponent},
{path: 'permisos/form/:permiso', component: FormComponentComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
