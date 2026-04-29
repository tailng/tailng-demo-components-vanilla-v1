import { Component, signal } from '@angular/core';
import { TngDialogComponent } from '@tailng-ui/components';
type DialogCloseReason = 'backdrop' | 'close-button' | 'escape' | 'programmatic';
@Component({
  selector: 'app-dialog-overview-plain-css',
  standalone: true,
  imports: [TngDialogComponent],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
})
export class DialogComponent {
  protected readonly reviewOpen = signal(false);
  protected readonly deleteOpen = signal(false);
  protected readonly result = signal('No decision yet');
  protected readonly lastReason = signal<DialogCloseReason | 'none'>('none');
  protected onClosed(reason: DialogCloseReason): void {
    this.lastReason.set(reason);
  }
  protected onOpenChange(next: boolean): void {
    this.reviewOpen.set(next);
  }

  protected onApprove(): void {
    this.result.set('Deleted release branch');
    this.deleteOpen.set(false);
  }
  protected onCancel(): void {
    this.result.set('Canceled');
    this.deleteOpen.set(false);
  }
}
