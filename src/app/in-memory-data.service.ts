import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Usuario } from './usuario';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const usuarios = [
      { id: 1, login: 'Matheus', senha: '130697' },
      { id: 2, login: 'admin', senha: 'admin' }
    ];
    return {usuarios};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(usuarios: Usuario[]): number {
    return usuarios.length > 0 ? Math.max(...usuarios.map(usuario => usuario.id)) + 1 : 11;
  }
}