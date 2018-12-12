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

  logaUsuario(login: string, senha: string): any{
    var i;
    var flag = 0;
    for (i = 0; i < USUARIOS.length; i++){
      if(USUARIOS[i].login == login){
        if(USUARIOS[i].senha == senha){
          console.log("Bem vindo, " + USUARIOS[i].login);
          flag = 1;
        }else{
          console.log("Senha incorreta.");
          flag = 1;
        }
      }
    }
    if(flag == 0){
      console.log("Usuário não cadastrado.");
    }
    return flag;
  }
}
