import { Component, signal } from '@angular/core';
import { TngMenuComponent, TngMenuTriggerFor } from '@tailng-ui/components';
import { TngMenuGroupLabel, TngMenuItem, type TngMenuSelectEvent } from '@tailng-ui/primitives';

@Component({
  selector: 'app-menu',
  imports: [TngMenuComponent, TngMenuTriggerFor, TngMenuGroupLabel, TngMenuItem],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  
  protected readonly menuOverviewPlainLastCommand = signal('No command yet');

  protected onMenuOverviewPlainSelect(event: TngMenuSelectEvent): void {
    this.menuOverviewPlainLastCommand.set(String(event.value));
  }

  
  protected readonly menuExamplesPlainLastCommand = signal('No command yet');

  protected onMenuExamplesPlainSelect(event: TngMenuSelectEvent): void {
    this.menuExamplesPlainLastCommand.set(String(event.value));
  }

  protected readonly menuExamplesCascadePlainLastCommand = signal('No command yet');

  protected onMenuExamplesCascadePlainSelect(event: TngMenuSelectEvent): void {
    this.menuExamplesCascadePlainLastCommand.set(String(event.value));
  }
}