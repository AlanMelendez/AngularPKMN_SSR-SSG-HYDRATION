import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContactPageComponent {

  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit() {
    this.title.setTitle('Contact');
    this.meta.updateTag({ name: 'description', content: 'Contact page description' });
    this.meta.updateTag({ name: 'description', content: 'Contact page description' });
    this.meta.updateTag({ name: 'og:title', content: 'Contact page description' });
    this.meta.updateTag({ name: 'keywords', content: 'Contact, contactame' });



  }
}
