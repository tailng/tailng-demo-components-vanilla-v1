import { Component, signal } from '@angular/core';
import { TngDrawerComponent } from "@tailng-ui/components";

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [TngDrawerComponent],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.css',
})
export class DrawerComponent {
  readonly plainCssOpen = signal(false);

}
