import { Component, computed, signal } from '@angular/core';
import { TngToggleComponent, TngToggleGroupComponent } from '@tailng-ui/components';

type DensityMode = 'compact' | 'comfortable' | 'spacious';
type ChecklistItem = 'docs' | 'qa' | 'review';

@Component({
  selector: 'app-toggle',
  imports: [TngToggleComponent, TngToggleGroupComponent],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.css',
})
export class ToggleComponent {

  readonly selectedDensity = signal<DensityMode>('comfortable');

  onDensityChange(value: string | null): void {
    if (value === 'compact' || value === 'comfortable' || value === 'spacious') {
      this.selectedDensity.set(value);
    }
  }

  onDensityChoiceClick(value: DensityMode, event: MouseEvent): void {
    const target = event.target;
    if (target instanceof Element && target.closest('tng-toggle') !== null) {
      return;
    }

    this.selectedDensity.set(value);
  }
  readonly selectedChecks = signal<readonly ChecklistItem[]>(['review']);

  onChecksChange(values: readonly string[]): void {
    this.selectedChecks.set(values.filter((value): value is ChecklistItem => value === "docs" || value === "qa" || value === "review"));
  }

  onChecklistChoiceClick(value: ChecklistItem, event: MouseEvent): void {
    const target = event.target;
    if (target instanceof Element && target.closest('tng-toggle') !== null) {
      return;
    }

    this.selectedChecks.set(
      this.selectedChecks().includes(value)
        ? this.selectedChecks().filter((item) => item !== value)
        : [...this.selectedChecks(), value],
    );
  }

  readonly boldActive = signal(true);
  readonly italicActive = signal(false);
  readonly codeActive = signal(true);

  readonly activeFormattingSummary = computed(() => {
    const active: string[] = [];
    if (this.boldActive()) {
      active.push('bold');
    }
    if (this.italicActive()) {
      active.push('italic');
    }
    if (this.codeActive()) {
      active.push('code');
    }
    return active.length > 0 ? active.join(', ') : 'none';
  });
}