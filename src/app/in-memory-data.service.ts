import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const heroes =  [

      { id: 1, name: 'Saitama' },
      { id: 2, name: 'Genos, o Ciborgue Demônio' },
      { id: 3, name: 'Bang, o Silver Fang' },
      { id: 4, name: 'Flashy Flash' },
      { id: 5, name: 'Cão de Guarda' },
      { id: 6, name: 'Superalloy Darkshine' },
      { id: 7, name: 'Deus Porco' },
      { id: 8, name: 'Tatsumaki, a Tornado do Terror' },
      { id: 9, name: 'Samurai Atômico' },
      { id: 0, name: 'Imperador Criança' }
    ];

    return {heroes};
   }

   genId(heroes: Hero[]): number {
     return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 9;
   }

}
