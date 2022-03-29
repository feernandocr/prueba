import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Services } from './service/services';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PermisosComponent } from './permisos/permisos.component';
import { HttpClientModule } from '@angular/common/http';
import { TipoPermisoComponent } from './tipo-permiso/tipo-permiso.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    NavbarComponent,
    PermisosComponent,
    TipoPermisoComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [Services],
  bootstrap: [AppComponent]
})
export class AppModule { }
