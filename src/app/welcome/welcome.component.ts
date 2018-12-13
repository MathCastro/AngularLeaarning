import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { USUARIOS } from '../mock-usuarios';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { SusersService } from '../susers.service'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

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

  getUsuario(): void {
    this.SusersService.getUsuario()
        .subscribe(usuarios => this.usuarios = usuarios);
  }

  deleta(usuario: Usuario): void{
    this.SusersService.deletaUsuario(usuario.id);
  }

}
