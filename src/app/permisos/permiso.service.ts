import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Permiso } from './permiso';


@Injectable()
export class PermisoService {
    private urlEndPoint:string = 'http://localhost:8081/permisos/getAllPermisos';
    constructor(private http: HttpClient) { }

    getAllEmpleados(): Observable<Permiso[]> {        
        return this.http.get(this.urlEndPoint).pipe(map(response => response as Permiso[]));
        console.log( typeof Response );
    }
}