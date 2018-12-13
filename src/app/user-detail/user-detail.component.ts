import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SusersService } from '../susers.service'
import { Usuario } from '../usuario'
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  usuarios: Usuario[];
  user: Usuario;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private SusersService: SusersService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit() {
    this.getUsuario();
  }

  getUsuario(): void {
    var i;
    const id = +this.route.snapshot.paramMap.get('id');
    this.id = id
    this.SusersService.getUsuario()
        .subscribe(usuarios => this.usuarios = usuarios);
    for (i = 0; i < this.usuarios.length; i++){
      if(this.usuarios[i].id == id){
        this.user = {
          id: this.usuarios[i].id,
          login: this.usuarios[i].login,
          senha: this.usuarios[i].senha
        }
      }
    }
  }

  altera(login: string, senha: string): void {
    if(login.length == 0 && senha.length == 0){
    }else if(senha.length == 0){
      this.SusersService.alteraUsuario(this.id, login, this.user.senha);
    }else if(login.length == 0){
      this.SusersService.alteraUsuario(this.id, this.user.login, senha);
    }else{
      this.SusersService.alteraUsuario(this.id, login, senha);
    }
    this.router.navigate(['/welcome']);
  }

  deleta(): void{
    this.SusersService.deletaUsuario(this.user.id);
    this.router.navigate(['/welcome']);
  }

}
