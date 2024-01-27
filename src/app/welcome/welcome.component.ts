import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  template: 'Welcome to Angular!',
  styles: ':host { color: blue; }'
})
export class WelcomeComponent {

}
