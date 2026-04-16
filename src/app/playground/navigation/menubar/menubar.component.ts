import { Component, signal } from '@angular/core';
import { TngMenuComponent, TngMenubarComponent } from '@tailng-ui/components';
import { TngMenuItem, TngMenubarItem, type TngMenuSelectEvent } from '@tailng-ui/primitives';

@Component({
  selector: 'app-menubar',
  imports: [TngMenuComponent, TngMenubarComponent, TngMenuItem, TngMenubarItem],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.css',
})
export class MenubarComponent {
  protected readonly menubarOverviewPlainLastCommand = signal('No command yet');

  protected onMenubarOverviewPlainCommandSelect(event: TngMenuSelectEvent): void {
    this.menubarOverviewPlainLastCommand.set(String(event.value));
  }

  protected onMenubarOverviewPlainLeafSelect(command: string): void {
    this.menubarOverviewPlainLastCommand.set(command);
  }

  readonly menubarExamplesWorkspacePlainLastCommand = signal('No command yet');

  onMenubarExamplesWorkspacePlainMenuSelect(event: TngMenuSelectEvent): void {
    this.menubarExamplesWorkspacePlainLastCommand.set(String(event.value));
  }

  readonly menubarExamplesCascadePlainLastCommand = signal('No command yet');

  onMenubarExamplesCascadePlainMenuSelect(event: TngMenuSelectEvent): void {
    this.menubarExamplesCascadePlainLastCommand.set(String(event.value));
  }
}