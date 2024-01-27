/* @Input */

// import { Component } from '@angular/core';
// import { UserComponent } from '../user/user.component';

// @Component({
//   selector: 'app-app',
//   standalone: true,
//   imports: [UserComponent],
//   template: `
//     <section>
//       <app-user name="Alice" />
//     </section>
//   `,
// })
// export class AppComponent {

// }

/* @Output */

import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-app',
  standalone: true,
  imports: [ChildComponent],
  template: `
    <app-child (addItemEvent)="addItem($event)" />
    <p>🐢 all the way down {{ items.length }}</p>
  `,
})
export class AppComponent {
  items = new Array();

  addItem(item: string) {
    this.items.push(item);
  }
}