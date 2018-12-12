import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { USUARIOS } from '../mock-usuarios';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { SusersService } from '../susers.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  @Input() usuario: Usuario;
  usuarios: Usuario[];
  constructor(
    private http: HttpClient,
    private location: Location,
    private router: Router,
    private SusersService: SusersService
    ) { }

  ngOnInit() {
    this.getUsuario();
  }

  loga(login: string, senha: string): void{
    var i;
    var flag = 0;
    for (i = 0; i < this.usuarios.length; i++){
      if(this.usuarios[i].login == login){
        if(this.usuarios[i].senha == senha){
          console.log("Bem vindo, " + this.usuarios[i].login);
          flag = 1;
          this.router.navigate(['/welcome']);
        }else{
          console.log("Senha incorreta.");
          flag = 1;
        }
      }
    }
    if(flag == 0){
      console.log("Usuário não cadastrado.");
    }
  }

  getUsuario(): void {
    this.SusersService.getUsuario()
        .subscribe(usuarios => this.usuarios = usuarios);
  }

}
