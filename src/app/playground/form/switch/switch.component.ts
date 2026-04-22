import { Component, signal } from '@angular/core';
import { TngSwitchComponent } from '@tailng-ui/components';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css',
  imports: [TngSwitchComponent],
})
export class SwitchComponent {
  readonly releaseReady = signal(true);
  readonly requireReview = signal(true);

  readonly releaseEmails = signal(true);  
  readonly freezeWindow = signal(false);
}
