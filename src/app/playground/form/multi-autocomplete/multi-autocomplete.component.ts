import { Component, computed, signal } from '@angular/core';
import { TngMultiAutocompleteComponent } from '@tailng-ui/components';

interface ComponentOverviewPlainLaunchMarketOption {
  readonly code: string;
  readonly label: string;
  readonly region: string;
}

const COMPONENT_OVERVIEW_PLAIN_LAUNCH_MARKET_OPTIONS: readonly ComponentOverviewPlainLaunchMarketOption[] = Object.freeze([
  { code: 'ca', label: 'Canada', region: 'North America' },
  { code: 'de', label: 'Germany', region: 'Europe' },
  { code: 'id', label: 'Indonesia', region: 'Asia Pacific' },
  { code: 'in', label: 'India', region: 'Asia Pacific' },
  { code: 'jp', label: 'Japan', region: 'Asia Pacific' },
  { code: 'mx', label: 'Mexico', region: 'North America' },
  { code: 'es', label: 'Spain', region: 'Europe' },
]);

interface ComponentStylingPlainReleaseOwnerOption {
  readonly id: string;
  readonly name: string;
  readonly team: string;
  readonly disabled?: boolean;
}

const COMPONENT_STYLING_PLAIN_RELEASE_OWNER_OPTIONS: readonly ComponentStylingPlainReleaseOwnerOption[] = Object.freeze([
  { id: 'abigail', name: 'Abigail Chen', team: 'Design systems' },
  { id: 'mina', name: 'Mina Lee', team: 'Core UI' },
  { id: 'omar', name: 'Omar Aziz', team: 'Compliance', disabled: true },
  { id: 'sanjay', name: 'Sanjay Patel', team: 'Documentation' },
]);

@Component({
  selector: 'app-multi-autocomplete',
  imports: [TngMultiAutocompleteComponent],
  templateUrl: './multi-autocomplete.component.html',
  styleUrl: './multi-autocomplete.component.css',
})
export class MultiAutocompleteComponent {
  readonly componentOverviewPlainLaunchMarkets = COMPONENT_OVERVIEW_PLAIN_LAUNCH_MARKET_OPTIONS;
  readonly componentOverviewPlainSelectedMarketCodes = signal<readonly string[]>(['in', 'jp']);
  readonly componentOverviewPlainSelectedMarketSummary = computed(() => {
    if (this.componentOverviewPlainSelectedMarketCodes().length === 0) {
      return 'none';
    }

    return this.componentOverviewPlainSelectedMarketCodes()
      .map((code) => this.componentOverviewPlainLaunchMarkets.find((market) => market.code === code)?.label ?? code)
      .join(', ');
  });
  readonly getComponentOverviewPlainMarketValue = (market: ComponentOverviewPlainLaunchMarketOption) => market.code;
  readonly getComponentOverviewPlainMarketLabel = (market: ComponentOverviewPlainLaunchMarketOption) => market.label;

  onComponentOverviewPlainSelectedMarketsChange(value: unknown): void {
    this.componentOverviewPlainSelectedMarketCodes.set(this.toComponentOverviewPlainValueArray(value));
  }

  private toComponentOverviewPlainValueArray(value: unknown): readonly string[] {
    if (!Array.isArray(value)) {
      return [];
    }

    return value
      .map((item) => (typeof item === 'string' ? item : String(item)))
      .filter((item) => item.length > 0);
  }

  readonly componentStylingPlainReleaseOwners = COMPONENT_STYLING_PLAIN_RELEASE_OWNER_OPTIONS;
  readonly componentStylingPlainSelectedOwnerIds = signal<readonly string[]>(['mina', 'sanjay']);
  readonly componentStylingPlainSelectedOwnerSummary = computed(() => {
    if (this.componentStylingPlainSelectedOwnerIds().length === 0) {
      return 'none';
    }

    return this.componentStylingPlainSelectedOwnerIds()
      .map((id) => this.componentStylingPlainReleaseOwners.find((owner) => owner.id === id)?.name ?? id)
      .join(', ');
  });
  readonly getComponentStylingPlainOwnerValue = (owner: ComponentStylingPlainReleaseOwnerOption) => owner.id;
  readonly getComponentStylingPlainOwnerLabel = (owner: ComponentStylingPlainReleaseOwnerOption) => owner.name;
  readonly isComponentStylingPlainOwnerDisabled = (owner: ComponentStylingPlainReleaseOwnerOption) => owner.disabled === true;

  onComponentStylingPlainSelectedOwnersChange(value: unknown): void {
    this.componentStylingPlainSelectedOwnerIds.set(this.toComponentStylingPlainValueArray(value));
  }

  private toComponentStylingPlainValueArray(value: unknown): readonly string[] {
    if (!Array.isArray(value)) {
      return [];
    }

    return value
      .map((item) => (typeof item === 'string' ? item : String(item)))
      .filter((item) => item.length > 0);
  }
}
