import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { PokemonListComponent } from "../pokemons/components/pokemon-list/pokemon-list.component";
import { PokemonListSkeletonComponent } from "../pokemons/components/pokemon-list-skeleton/pokemon-list-skeleton.component";
import { PokemosService } from '../pokemons/services/pokemos.service';
import { SimplePokemon } from '../pokemons/interfaces/simple-pokemon';

@Component({
  selector: 'app-pokemons-page',
  standalone: true,
  imports: [PokemonListComponent, PokemonListSkeletonComponent],
  templateUrl: './pokemons-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonsPageComponent {

  // public isLoading = signal<boolean>(true);
  private pokemonService = inject(PokemosService);

  public pokemons =  signal<SimplePokemon[]>([]);


  ngOnInit() {
    // setTimeout(() => {
    //   this.isLoading.set(false);
    // }, 5000);

    this.loadPokemons();
  }

  public loadPokemons(nextPage: number = 0) {
    this.pokemonService.loadPage(nextPage).subscribe((simplePokemons) => {
      this.pokemons.set(simplePokemons);
    });

  }

 }
