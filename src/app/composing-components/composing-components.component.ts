import { Component } from '@angular/core';
import { WelcomeComponent } from '../welcome/welcome.component';

@Component({
  selector: 'app-composing-components',
  standalone: true,
  imports: [WelcomeComponent],
  template: `
    <section>
      <app-welcome />
    </section>
  ` 
})
export class ComposingComponentsComponent {

}
