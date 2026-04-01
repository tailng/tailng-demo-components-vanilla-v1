import { Component } from '@angular/core';
import { TngLabelComponent } from '@tailng-ui/components';

@Component({
  selector: 'app-label',
  standalone: true,
  templateUrl: './label.component.html',
  styleUrl: './label.component.css',
  imports: [TngLabelComponent],
})
export class LabelComponent {}
