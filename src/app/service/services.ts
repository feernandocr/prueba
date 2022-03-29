import { Permiso } from './../permisos/permiso';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TipoPermiso } from '../model/tipoPermiso';
import { PermisoRequest } from '../permisos/permiso-request';

@Injectable()
export class Services {
  private urlEndPoint: string = 'http://localhost:8081/permisos/';
  constructor(private http: HttpClient) {}

  getPermisos(): Observable<Permiso[]> {
    return this.http
      .get(this.urlEndPoint + 'getAllPermisos')
      .pipe(map((response) => response as Permiso[]));
    console.log(typeof Response);
  }

  getTipoPermisos(): Observable<TipoPermiso[]> {
    return this.http
      .get(this.urlEndPoint + 'getTipoPermiso')
      .pipe(map((response) => response as TipoPermiso[]));
    console.log(typeof Response);
  }
  //Este metodo sirve para Registrar un permiso
  registrarPermiso(permiso: PermisoRequest): Observable<object> {
    return this.http.post(this.urlEndPoint + 'newPermiso', permiso);
  }
  //Este metodo sirve para Actualizar un permiso
  actualizarPermiso(permiso: PermisoRequest): Observable<object> {
    return this.http.post(this.urlEndPoint + 'updatePermiso', permiso);
  }
  eliminarPermiso(idPermiso: number): Observable<object> {
    return this.http.delete(this.urlEndPoint + 'deletePermiso/' + idPermiso);
  }
}
