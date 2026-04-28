import { Component } from '@angular/core';
import { TngSeparatorComponent } from '@tailng-ui/components';

@Component({
  selector: 'app-separator',
  standalone: true,
  imports: [TngSeparatorComponent],
  templateUrl: './separator.component.html',
  styleUrl: './separator.component.css',
})
export class SeparatorComponent {}
