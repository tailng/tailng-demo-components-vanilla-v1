import { Component } from '@angular/core';
import { TngCheckboxComponent } from '@tailng-ui/components';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css',
  imports: [TngCheckboxComponent],
})
export class CheckboxComponent {}
