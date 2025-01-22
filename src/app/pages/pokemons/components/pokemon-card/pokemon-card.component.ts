import { ChangeDetectionStrategy, Component, computed, effect, input, signal } from '@angular/core';
import { SimplePokemon } from '../../interfaces/simple-pokemon';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonCardComponent {
  public pokemon = input.required<SimplePokemon>();
  public readonly pokemonImg = computed(() => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemon().url}.png`);
  logEffect = effect(() => {
    console.log('Pokemon card: ', this.pokemon());
  });
}
