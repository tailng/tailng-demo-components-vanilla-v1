import { Component, computed, signal } from '@angular/core';
import { TngAutocompleteComponent } from '@tailng-ui/components';

interface CountryOption {
  readonly code: string;
  readonly label: string;
}

const COUNTRY_OPTIONS: readonly CountryOption[] = Object.freeze([
  { code: 'ca', label: 'Canada' },
  { code: 'de', label: 'Germany' },
  { code: 'id', label: 'Indonesia' },
  { code: 'in', label: 'India' },
  { code: 'jp', label: 'Japan' },
  { code: 'mx', label: 'Mexico' },
  { code: 'es', label: 'Spain' },
]);

interface OwnerOption {
  readonly id: string;
  readonly name: string;
  readonly disabled?: boolean;
}

const OWNER_OPTIONS: readonly OwnerOption[] = Object.freeze([
  { id: 'abigail', name: 'Abigail Chen' },
  { id: 'mina', name: 'Mina Lee' },
  { id: 'omar', name: 'Omar Aziz', disabled: true },
  { id: 'sanjay', name: 'Sanjay Patel' },
]);


@Component({
  selector: 'app-autocomplete',
  imports: [TngAutocompleteComponent],
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.css',
})
export class AutocompleteComponent {
  readonly countries = COUNTRY_OPTIONS;
  readonly selectedCountry = signal<string | null>('in');
  readonly selectedLabel = computed(
    () => this.countries.find((country) => country.code === this.selectedCountry())?.label ?? 'none',
  );
  readonly getCountryValue = (country: CountryOption) => country.code;
  readonly getCountryLabel = (country: CountryOption) => country.label;

  onSelectedCountryChange(value: string | null): void {
    this.selectedCountry.set(typeof value === 'string' ? value : null);
  }

  readonly releaseOwners = OWNER_OPTIONS;
  readonly selectedOwner = signal<string | null>('mina');
  readonly selectedSummary = computed(
    () => this.releaseOwners.find((owner) => owner.id === this.selectedOwner())?.name ?? 'none',
  );
  readonly getOwnerValue = (owner: OwnerOption) => owner.id;
  readonly getOwnerLabel = (owner: OwnerOption) => owner.name;
  readonly isOwnerDisabled = (owner: OwnerOption) => owner.disabled === true;

  onSelectedOwnerChange(value: unknown): void {
    this.selectedOwner.set(typeof value === 'string' ? value : null);
  }
}
