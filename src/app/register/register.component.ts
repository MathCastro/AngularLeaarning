import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { USUARIOS } from '../mock-usuarios';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { SusersService } from '../susers.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() usuario: Usuario[];
  usuarios: Usuario[];
  user: Usuario;

  constructor(
    private http: HttpClient,
    private location: Location,
    private router: Router,
    private SusersService: SusersService
    ) { }

  ngOnInit() {
    this.getUsuario();
  }

  registra(login: string, senha: string, senhaconfirmada: string): void{
    if(senha == senhaconfirmada){
      var indice = this.usuarios.length - 1;
      indice = this.usuarios[indice].id + 1;
      console.log(indice);
      this.user = {
        id: indice,
        login: login,
        senha: senha
      }
      this.SusersService.addUsuarios(this.user);
      this.router.navigate(['/login']);
      
    }else{
      console.log("Senhas diferem.");
    }
  //   var i;
  //   var flag = 0;
  //   for (i = 0; i < USUARIOS.length; i++){
  //     if(USUARIOS[i].login == login){
  //       if(USUARIOS[i].senha == senha){
  //         console.log("Bem vindo, " + USUARIOS[i].login);
  //         flag = 1;
  //         this.router.navigate(['/welcome']);
  //       }
  //     }
  //   }
  //   if(flag == 0){
  //     console.log("Usuário não cadastrado");
  //   }
  }

  getUsuario(): void {
    this.SusersService.getUsuario()
        .subscribe(usuarios => this.usuarios = usuarios);
  }

}
