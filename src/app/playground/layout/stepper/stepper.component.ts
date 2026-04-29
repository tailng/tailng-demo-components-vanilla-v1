import { Component } from '@angular/core';
import { TngStepperComponent } from '@tailng-ui/components';
@Component({
  selector: 'app-stepper-overview-plain-css',
  standalone: true,
  imports: [TngStepperComponent],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css',
})
export class StepperComponent {}
