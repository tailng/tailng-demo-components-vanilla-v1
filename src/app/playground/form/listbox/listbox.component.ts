import { Component, computed, signal } from '@angular/core';
import { TngListboxComponent } from '@tailng-ui/components';

type CapabilityId = 'a11y' | 'components' | 'styling' | 'tests' | 'roadmap';

interface CapabilityOption {
  readonly description: string;
  readonly disabled?: boolean;
  readonly id: CapabilityId;
  readonly label: string;
}

const CAPABILITY_OPTIONS: readonly CapabilityOption[] = Object.freeze([
  { id: 'a11y', label: 'Accessibility baseline', description: 'Keyboard and ARIA contracts for deterministic interaction behavior.' },
  { id: 'components', label: 'Components integration', description: 'Shared primitives and wrappers for TailNG form controls.' },
  { id: 'styling', label: 'Styling contracts', description: 'State hooks and CSS contracts for custom product skins.' },
  { id: 'tests', label: 'Testing harness', description: 'Regression suites for keyboard, pointer, and typeahead behavior.' },
  { id: 'roadmap', label: 'Wrapper roadmap (disabled)', description: 'Wrapper-level composition for richer always-open selection surfaces.', disabled: true },
]);

function isCapabilityId(value: string): value is CapabilityId {
  return value === 'a11y' || value === 'components' || value === 'styling' || value === 'tests' || value === 'roadmap';
}


type ChannelValue = 'changelog' | 'docs' | 'team' | 'support';
type ListboxModel = string | readonly string[] | null;

interface ChannelOption {
  readonly value: ChannelValue;
  readonly title: string;
  readonly description: string;
}

const CHANNEL_OPTIONS: readonly ChannelOption[] = [
  {
    value: 'changelog',
    title: 'Changelog',
    description: 'Release notes and external announcements.',
  },
  {
    value: 'docs',
    title: 'Docs',
    description: 'Public docs synchronization and snippets.',
  },
  {
    value: 'team',
    title: 'Team updates',
    description: 'Internal team status updates.',
  },
  {
    value: 'support',
    title: 'Support',
    description: 'Customer success and support queues.',
  },
];

function isChannelValue(value: string): value is ChannelValue {
  return value === 'changelog' || value === 'docs' || value === 'team' || value === 'support';
}

@Component({
  selector: 'app-listbox',
  imports: [TngListboxComponent],
  templateUrl: './listbox.component.html',
  styleUrl: './listbox.component.css',
})
export class ListboxComponent {

  readonly capabilityOptions = CAPABILITY_OPTIONS;
  readonly selectedCapabilities = signal<readonly CapabilityId[]>(['components']);
  readonly selectedSummary = computed(() => {
    const labels = this.selectedCapabilities()
      .map((value) => this.capabilityOptions.find((option) => option.id === value)?.label)
      .filter((label): label is string => label !== undefined);

    return labels.length > 0 ? labels.join(', ') : 'none';
  });

  onSelectedCapabilitiesChange(value: CapabilityId | readonly CapabilityId[] | null): void {
    this.selectedCapabilities.set(this.toArray(value));
  }

  private toArray(value: CapabilityId | readonly CapabilityId[] | null): readonly CapabilityId[] {
    if (value === null) {
      return [];
    }

    const values = typeof value === 'string' ? [value] : value;
    return values.filter(isCapabilityId);
  }

  readonly channelOptions = CHANNEL_OPTIONS;
  readonly selectedChannelA = signal<ChannelValue | null>('docs');
  readonly selectedChannelB = signal<ChannelValue | null>('team');
  readonly selectedChannelSummaryA = computed(() => this.formatSelection(this.selectedChannelA()));
  readonly selectedChannelSummaryB = computed(() => this.formatSelection(this.selectedChannelB()));

  onSelectedChannelAChange(value: ListboxModel): void {
    const candidate = typeof value === 'string' ? value : value?.[0] ?? null;
    this.selectedChannelA.set(candidate && isChannelValue(candidate) ? candidate : null);
  }

  onSelectedChannelBChange(value: ListboxModel): void {
    const candidate = typeof value === 'string' ? value : value?.[0] ?? null;
    this.selectedChannelB.set(candidate && isChannelValue(candidate) ? candidate : null);
  }

  private formatSelection(value: ChannelValue | null): string {
    if (!value) {
      return 'none';
    }

    return CHANNEL_OPTIONS.find((option) => option.value === value)?.title ?? 'unknown';
  }
}
