import { Component, computed, signal } from '@angular/core';
import { TngMultiSelectComponent } from '@tailng-ui/components';

interface PlanetOption {
  readonly value: string;
  readonly label: string;
  readonly disabled?: boolean;
}

const PLANETS: readonly PlanetOption[] = [
  { value: 'mercury', label: 'Mercury' },
  { value: 'venus', label: 'Venus' },
  { value: 'earth', label: 'Earth' },
  { value: 'mars', label: 'Mars' },
  { value: 'jupiter', label: 'Jupiter', disabled: true },
  { value: 'uranus', label: 'Uranus' },
  { value: 'neptune', label: 'Neptune' },
];

interface TagOption {
  readonly value: string;
  readonly label: string;
}

const TAG_OPTIONS: readonly TagOption[] = Object.freeze([
  { value: 'a11y', label: 'A11y' },
  { value: 'forms', label: 'Forms' },
  { value: 'overlay', label: 'Overlay' },
  { value: 'docs', label: 'Docs' },
]);

@Component({
  selector: 'app-multiselect',
  imports: [TngMultiSelectComponent],
  templateUrl: './multiselect.component.html',
  styleUrl: './multiselect.component.css',
})
export class MultiselectComponent {
  readonly planets = PLANETS;
  readonly selectedPlanets = signal<readonly string[]>(['earth', 'mars', 'neptune']);
  readonly getPlanetValue = (o: PlanetOption) => o.value;
  readonly getPlanetLabel = (o: PlanetOption) => o.label;

  onValueChange(value: unknown): void {
    if (Array.isArray(value)) this.selectedPlanets.set(value);
  }

  readonly tagOptions = TAG_OPTIONS;
  readonly tagValueA = signal<readonly string[]>(['a11y', 'docs']);
  readonly tagValueB = signal<readonly string[]>(['forms']);
  readonly tagSummaryA = computed(() => this.resolveLabels(this.tagValueA()));
  readonly tagSummaryB = computed(() => this.resolveLabels(this.tagValueB()));
  readonly getTagValue = (option: TagOption) => option.value;
  readonly getTagLabel = (option: TagOption) => option.label;

  onTagAValueChange(value: unknown): void {
    this.tagValueA.set(this.toValueArray(value));
  }

  onTagBValueChange(value: unknown): void {
    this.tagValueB.set(this.toValueArray(value));
  }

  private resolveLabels(values: readonly string[]): string {
    const labels = values
      .map((v) => this.tagOptions.find((o) => o.value === v)?.label)
      .filter((l): l is string => l !== undefined);
    return labels.length > 0 ? labels.join(', ') : 'none';
  }

  private toValueArray(value: unknown): readonly string[] {
    if (value === null || value === undefined) return [];
    if (Array.isArray(value)) return value.filter((v): v is string => typeof v === 'string');
    return typeof value === 'string' ? [value] : [];
  }
}
