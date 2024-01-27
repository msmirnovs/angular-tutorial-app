import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  imports: [],
  template: `
    <div [contentEditable]="isEditable"></div>
  `,
  styles: '',
})
export class PropertyBindingComponent {
  isEditable = true;
}
