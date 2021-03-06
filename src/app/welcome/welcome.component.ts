import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { USUARIOS } from '../mock-usuarios';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { SusersService } from '../susers.service'
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  usuarios: Usuario[];
  displayedColumns: string[] = ['id', 'login', 'senha'];
  selection = new SelectionModel<Usuario>(true, []);

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
  
  selectRow(row) {
    var localizacao = '/detail/' + row
    this.router.navigate([localizacao]);
  }

  /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
      const numSelected = this.selection.selected.length;
      const numRows = this.usuarios.length;
      return numSelected === numRows;
    }
  
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
      this.isAllSelected() ?
          this.selection.clear() :
          this.usuarios.forEach(row => this.selection.select(row));
    }

}
