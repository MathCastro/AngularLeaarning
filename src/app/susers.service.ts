import { Injectable } from '@angular/core';
import { USUARIOS } from './mock-usuarios';
import { Usuario } from './usuario'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SusersService {

  usuarios: Usuario[] = USUARIOS;

  constructor() { }

  getUsuario(): Observable<Usuario[]> {
    return of(this.usuarios);
  }

  addUsuarios(usuario: Usuario): void{
    this.usuarios.push(usuario);
  }

  deletaUsuario(id: number): void{
    var i;
    for (i = 0; i < this.usuarios.length; i++){
      if(this.usuarios[i].id == id){
        this.usuarios.splice(i,1);
      }
    }
  }
}
