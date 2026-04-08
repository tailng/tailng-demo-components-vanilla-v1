import { Component, computed, signal } from '@angular/core';
import { TngChipsComponent } from '@tailng-ui/components';
import { TngChip, TngChipRemove } from '@tailng-ui/primitives';

const COMPONENT_CHIPS_OVERVIEW_PLAIN_SELECTED_TOPICS = Object.freeze([
  'Accessibility',
  'Forms',
  'Release notes',
]);

const COMPONENT_CHIPS_EXAMPLES_PLAIN_RELEASE_LANES = Object.freeze([
  'Stable',
  'Preview',
  'Locked',
]);

@Component({
  selector: 'app-chips',
  imports: [TngChipsComponent, TngChip, TngChipRemove],
  templateUrl: './chips.component.html',
  styleUrl: './chips.component.css',
})
export class ChipsComponent {
  readonly componentChipsOverviewPlainSelectedTopics = signal<readonly string[]>(
    COMPONENT_CHIPS_OVERVIEW_PLAIN_SELECTED_TOPICS,
  );
  readonly componentChipsOverviewPlainSummary = computed(() => {
    const values = this.componentChipsOverviewPlainSelectedTopics();
    return values.length > 0 ? values.join(', ') : 'none';
  });

  onComponentChipsOverviewPlainValuesChange(nextValues: readonly unknown[]): void {
    this.componentChipsOverviewPlainSelectedTopics.set(
      nextValues.filter((value): value is string => typeof value === 'string'),
    );
  }

  readonly componentChipsExamplesPlainReleaseLanes = signal<readonly string[]>(
    COMPONENT_CHIPS_EXAMPLES_PLAIN_RELEASE_LANES,
  );
  readonly componentChipsExamplesPlainReleaseLaneSummary = computed(() => {
    const values = this.componentChipsExamplesPlainReleaseLanes();
    return values.length > 0 ? values.join(', ') : 'none';
  });

  onComponentChipsExamplesPlainReleaseLanesChange(nextValues: readonly unknown[]): void {
    this.componentChipsExamplesPlainReleaseLanes.set(
      nextValues.filter((value): value is string => typeof value === 'string'),
    );
  }

  isComponentChipsExamplesPlainReleaseLaneLocked(lane: string): boolean {
    return lane === 'Locked';
  }
}