import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-price',
  standalone: true,
  imports: [],
  templateUrl: './pricing-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PricingPageComponent { }