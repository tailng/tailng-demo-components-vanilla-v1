import { Component } from '@angular/core';
import { TngFormFieldComponent } from '@tailng-ui/components';
import { TngIcon } from '@tailng-ui/icons';
import { TngInput } from '@tailng-ui/primitives';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [TngFormFieldComponent, TngInput, TngIcon],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.css',
})
export class FormFieldComponent {}

