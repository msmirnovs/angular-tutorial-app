/* @Input */

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  template: `
  <p>The user's name is {{ name }}</p>
`,
  imports: [UserComponent],
})
export class UserComponent {
  @Input() name = '';
}
