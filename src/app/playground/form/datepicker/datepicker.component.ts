import { Component } from '@angular/core';
import { TngInputComponent } from '@tailng-ui/components';

@Component({
  selector: 'app-datepicker',
  imports: [TngInputComponent],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.css',
})
export class DatepickerComponent {}
