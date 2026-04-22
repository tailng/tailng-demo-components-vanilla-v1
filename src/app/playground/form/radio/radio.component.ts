import { Component, signal } from '@angular/core';
import { TngRadioComponent } from '@tailng-ui/components';

type PlainBillingPlan = 'starter' | 'pro' | 'enterprise';

@Component({
  selector: 'app-radio',
  standalone: true,
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.css',
  imports: [TngRadioComponent],
})
export class RadioComponent {

  readonly selectedPlainBillingPlan = signal<PlainBillingPlan>('pro');

  onPlainBillingPlanChange(plan: PlainBillingPlan, checked: boolean): void {
    if (!checked) {
      return;
    }

    this.selectedPlainBillingPlan.set(plan);
  }

}
