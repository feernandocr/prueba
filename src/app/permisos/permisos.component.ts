import { Router } from '@angular/router';
import { Services } from './../service/services';
import { Component, OnInit } from '@angular/core';
import { Permiso } from './permiso';
import swal from 'sweetalert2';
import { TipoPermiso } from '../model/tipoPermiso';
import { PermisoRequest } from './permiso-request';
@Component({
  selector: 'app-permisos',
  templateUrl: './permisos.component.html',
  styleUrls: ['./permisos.component.css'],
})
export class PermisosComponent implements OnInit {
  permisos: Permiso[];
  tipos: TipoPermiso[];

  selectPermiso: PermisoRequest = new PermisoRequest();
  constructor(private services: Services, private router: Router) { }

  ngOnInit(): void {
    this.services
      .getPermisos()
      .subscribe((permisos) => (this.permisos = permisos));

    this.services.getTipoPermisos().subscribe((tipos) => (this.tipos = tipos));
  }

  eliminarPermiso(idPermiso: number) {
    swal({
      title: '¿Estas seguro?',
      text: 'Confirma si deseas eliminar el permiso',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínalo',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true,
    }).then((result) => {
      if (result.value) {
        this.services.eliminarPermiso(idPermiso).subscribe((dato) => {
          console.log(dato);
          this.getPermisos;
          swal(
            'Permiso eliminado',
            'El Permiso ha sido eliminado con exito',
            'success'
          );
        });
      }
    });
  }

  private getPermisos() {
    this.services.getPermisos().subscribe((dato) => {
      this.permisos = dato;
    });
  }

  openForEdit(permiso: Permiso) {
    this.selectPermiso.idPermiso = permiso.idPermiso;
    this.selectPermiso.nombreEmpleado = permiso.nombreEmpleado;
    this.selectPermiso.apellidoEmpleado = permiso.apellidoEmpleado;
    this.selectPermiso.idTipoPermiso = permiso.tipoPermiso.idTipoPermiso;
    this.selectPermiso.fechaPermiso = permiso.fechaPermiso;


  }

  updatePermiso() {
    console.log('registro a a id: ' + this.selectPermiso.idPermiso);
    console.log('registro a nombre: ' + this.selectPermiso.nombreEmpleado);
    console.log('registro a a id: ' + this.selectPermiso.idTipoPermiso);
    if (this.selectPermiso.idPermiso == null||
      this.selectPermiso.nombreEmpleado == null ||
      this.selectPermiso.apellidoEmpleado == null ||
      this.selectPermiso.fechaPermiso == null ||
      this.selectPermiso.idTipoPermiso == null) {
      swal(
        'Vacio',
        'Favor de validar todos los campos',
        'error'
      );
      return;
    }
    this.services.actualizarPermiso(this.selectPermiso).subscribe(
      (dato) => {
        console.log('registro actualizado: ' + dato);
        this.getPermisos();
      },
      (error) => console.log(error)
    );
  }
}
