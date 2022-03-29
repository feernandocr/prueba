import { TipoPermiso } from '../model/tipoPermiso';

export class Permiso {
    idPermiso:number;
    nombreEmpleado:String;
    apellidoEmpleado:String;
    tipoPermiso:TipoPermiso;
    fechaPermiso:Date;
}