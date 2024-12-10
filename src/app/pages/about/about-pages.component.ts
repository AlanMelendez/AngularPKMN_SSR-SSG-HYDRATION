import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about-pages.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutPagesComponent {

  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit() {
    this.title.setTitle('About');
    this.meta.updateTag({ name: 'description', content: 'About page description' });
    this.meta.updateTag({ name: 'description', content: 'About page description' });
    this.meta.updateTag({ name: 'og:title', content: 'About page description' });
    this.meta.updateTag({ name: 'keywords', content: 'Acerca de, descripcion pagina, contacto, informacion' });



  }

 }
