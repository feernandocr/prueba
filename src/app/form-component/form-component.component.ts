import { ActivatedRoute, Router } from '@angular/router';
import { Permiso } from './../permisos/permiso';
import { TipoPermiso } from './../model/tipoPermiso';
import { Services } from './../service/services';
import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PermisoRequest } from '../permisos/permiso-request';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';
@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})

@Injectable()
export class FormComponentComponent implements OnInit  {
 tipos :TipoPermiso[];
 permiso : Permiso = new Permiso();
 permisoRequest: PermisoRequest = new PermisoRequest();
 angForm: FormGroup;
 requiredForm: FormGroup;

constructor( private service:Services,
             private router:Router, 
             private activatedRoute:ActivatedRoute
              ) { 
              
             }

  ngOnInit(): void {
    this.service.getTipoPermisos().subscribe(
      tipos => this.tipos = tipos
    );
  }
 
  onSubmit(){
    this.guardarPermiso();
    
  } 

  guardarPermiso(){
    if(this.permisoRequest.nombreEmpleado == null||
       this.permisoRequest.apellidoEmpleado == null||
       this.permisoRequest.fechaPermiso == null||
       this.permisoRequest.idTipoPermiso == null){
      swal(
        'Vacio',
        'Favor de validar todos los campos',
        'error'
      );    
      return;
    }

    this.service.registrarPermiso(this.permisoRequest).subscribe(dato =>{
      console.log(dato);
      this.irListaPermiso()
    },error => console.log(error));
  }

  irListaPermiso(){
    this.router.navigate(['/permisos']);

  }

}
