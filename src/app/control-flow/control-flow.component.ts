import { Component } from '@angular/core';

/* @if */

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [],
  template: `
    @if (isServerRunning) {
    <span>Yes, the server is running</span>
    } @else {
    <span>No, the server is not running</span>
    }
  `,
})
export class ControlFlowComponent {
  isServerRunning = true;
}

/* @for */

// @Component({
//   selector: 'app-control-flow',
//   standalone: true,
//   imports: [],
//   template: `
//     @for(user of users; track user.id) {
//     <p>{{ user.name }}</p>
//     }
//   `,
// })
// export class ControlFlowComponent {
//   users = [
//     {id: 0, name: 'Sarah'},
//     {id: 1, name: 'Amy'},
//     {id: 2, name: 'Rachel'},
//     {id: 3, name: 'Jessica'},
//     {id: 4, name: 'Poornima'},
//   ];
// }

