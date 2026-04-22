import { Component, signal } from '@angular/core';
import { TngButtonToggleGroupComponent, TngButtonToggleComponent } from '@tailng-ui/components';
import { TngButtonToggleValue } from '@tailng-ui/primitives';

type PlainDensityOption = 'compact' | 'comfortable' | 'spacious';
type PlainReleaseTarget = 'review' | 'ship-now';
type PlainTextStyleOption = 'bold' | 'italic' | 'underline';

@Component({
  selector: 'app-button-toggle',
  imports: [TngButtonToggleGroupComponent, TngButtonToggleComponent],
  templateUrl: './button-toggle.component.html',
  styleUrl: './button-toggle.component.css',
})
export class ButtonToggleComponent {
  readonly selectedPlainDensity = signal<PlainDensityOption>('comfortable');


  onPlainDensityChange(value: TngButtonToggleValue | null): void {
    if (value === 'compact' || value === 'comfortable' || value === 'spacious') {
      this.selectedPlainDensity.set(value);
    }
  }

  readonly selectedPlainReleaseTarget = signal<PlainReleaseTarget>('review');

  onPlainReleaseTargetChange(value: TngButtonToggleValue | null): void {
    if (value === 'review' || value === 'ship-now') {
      this.selectedPlainReleaseTarget.set(value);
    }
  }
  readonly selectedPlainTextStyles = signal<readonly PlainTextStyleOption[]>(['italic']);

  onPlainTextStylesChange(values: readonly (string | number)[]): void {
    this.selectedPlainTextStyles.set(
      values.filter((value): value is PlainTextStyleOption => value === 'bold' || value === 'italic' || value === 'underline'),
    );
  }
}
