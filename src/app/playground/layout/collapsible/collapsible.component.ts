import { Component, signal } from '@angular/core';
import { TngCollapsibleComponent } from '@tailng-ui/components';
@Component({
  selector: 'app-collapsible-overview-plain-css',
  standalone: true,
  imports: [TngCollapsibleComponent],
  templateUrl: './collapsible.component.html',
  styleUrl: './collapsible.component.css',
})
export class CollapsibleComponent {
   readonly open = signal(true);
}
