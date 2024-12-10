import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-price',
  standalone: true,
  imports: [],
  templateUrl: './pricing-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PricingPageComponent {

  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit() {
    this.title.setTitle('Pricing');
    this.meta.updateTag({ name: 'description', content: 'Pricing page description' });
    this.meta.updateTag({ name: 'description', content: 'Pricing page description' });
    this.meta.updateTag({ name: 'og:title', content: 'Pricing page description' });
    this.meta.updateTag({ name: 'keywords', content: 'Precios, costs, pricing, precios, costos de, precios de' });



  }
}
