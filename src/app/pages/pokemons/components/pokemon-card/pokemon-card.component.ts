import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
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
}
