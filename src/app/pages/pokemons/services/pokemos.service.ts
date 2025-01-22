import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { SimplePokemon } from '../interfaces/simple-pokemon';
import { map, Observable, tap } from 'rxjs';
import { PokeAPIResponse } from '../interfaces/pokemon-api.response';

@Injectable({
  providedIn: 'root',
})
export class PokemosService {
  private httpClient = inject(HttpClient);

  public loadPage(page: number): Observable<SimplePokemon[]> {
    if (page != 0) {
      page = page - 1;
    }
    page = Math.max(0, page); //Ever get 0 or more , if page is negative, it will return 0
    return this.httpClient
      .get<PokeAPIResponse>(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${page * 20}&limit=20`)
      .pipe(
        map((response: PokeAPIResponse) => {
          const simplePokemons: SimplePokemon[] = response.results.map(
            (result) => {
              return {
                name: result.name,
                url: result.url.split('/').at(-2) ?? '',
              };
            }
          );

          return simplePokemons;
        }),
        tap((simplePokemons) => {
          console.log('List extracted from pokemons: ',simplePokemons);
        })
      );
    // .;
  }
}
