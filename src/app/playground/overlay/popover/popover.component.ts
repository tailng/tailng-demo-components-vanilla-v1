import { Component, signal } from '@angular/core';
import { TngPopoverComponent } from '@tailng-ui/components';
type PopoverCloseReason = 'escape' | 'outside-pointer' | 'programmatic' | 'trigger-toggle';
@Component({
  selector: 'app-popover-overview-plain-css',
  standalone: true,
  imports: [TngPopoverComponent],
  templateUrl: './popover.component.html',
  styleUrl: './popover.component.css',
})
export class PopoverComponent {
  protected readonly reviewOpen = signal(false);
  protected readonly deleteOpen = signal(false);
  protected readonly result = signal('No decision yet');
  protected readonly lastReason = signal<PopoverCloseReason | 'none'>('none');
  protected onClosed(reason: PopoverCloseReason): void {
    this.lastReason.set(reason);
  }
  protected onCancel(): void {
    this.result.set('Canceled');
    this.deleteOpen.set(false);
  }
  protected onApprove(): void {
    this.result.set('Deleted release branch');
    this.deleteOpen.set(false);
  }
}
