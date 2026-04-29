import { Component, signal } from '@angular/core';
import { TngTooltipComponent } from '@tailng-ui/components';
@Component({
  selector: 'app-tooltip-overview-plain-css',
  standalone: true,
  imports: [TngTooltipComponent],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.css',
})
export class TooltipComponent {
  protected readonly open = signal(false);
}
