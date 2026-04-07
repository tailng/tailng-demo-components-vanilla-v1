import { Component, computed, signal } from '@angular/core';
import { TngSelectComponent } from '@tailng-ui/components';

interface ComponentSelectboxOverviewPlainWorkflowStageOption {
  readonly value: string;
  readonly label: string;
  readonly note: string;
  readonly disabled?: boolean;
}

const COMPONENT_SELECTBOX_OVERVIEW_PLAIN_WORKFLOW_STAGE_OPTIONS: readonly ComponentSelectboxOverviewPlainWorkflowStageOption[] = Object.freeze([
  { value: 'draft', label: 'Draft', note: 'Internal drafting only.' },
  { value: 'review', label: 'In review', note: 'Waiting on editorial review.' },
  { value: 'qa', label: 'QA ready', note: 'Approved for validation.' },
  { value: 'live', label: 'Live', note: 'Already published.', disabled: true },
]);

interface ComponentSelectboxExamplesPlainReleaseOwnerOption {
  readonly id: string;
  readonly name: string;
  readonly team: string;
  readonly timezone: string;
  readonly disabled?: boolean;
}

const COMPONENT_SELECTBOX_EXAMPLES_PLAIN_RELEASE_OWNER_OPTIONS: readonly ComponentSelectboxExamplesPlainReleaseOwnerOption[] = Object.freeze([
  { id: 'abigail', name: 'Abigail Chen', team: 'Design systems', timezone: 'UTC-8' },
  { id: 'mina', name: 'Mina Lee', team: 'Core UI', timezone: 'UTC-5' },
  { id: 'omar', name: 'Omar Aziz', team: 'Compliance', timezone: 'UTC+1', disabled: true },
  { id: 'sanjay', name: 'Sanjay Patel', team: 'Documentation', timezone: 'UTC+5:30' },
]);

@Component({
  selector: 'app-select',
  imports: [TngSelectComponent],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css',
})
export class SelectComponent {
  readonly componentSelectboxOverviewPlainWorkflowStages = COMPONENT_SELECTBOX_OVERVIEW_PLAIN_WORKFLOW_STAGE_OPTIONS;
  readonly componentSelectboxOverviewPlainSelectedStage = signal<string | null>('review');
  readonly componentSelectboxOverviewPlainSelectedStageSummary = computed(() => {
    const selectedValue = this.componentSelectboxOverviewPlainSelectedStage();
    if (selectedValue === null) {
      return 'none';
    }

    return this.componentSelectboxOverviewPlainWorkflowStages.find((stage) => stage.value === selectedValue)?.label ?? 'none';
  });
  readonly getComponentSelectboxOverviewPlainWorkflowStageValue = (stage: ComponentSelectboxOverviewPlainWorkflowStageOption) => stage.value;
  readonly getComponentSelectboxOverviewPlainWorkflowStageLabel = (stage: ComponentSelectboxOverviewPlainWorkflowStageOption) => stage.label;
  readonly isComponentSelectboxOverviewPlainWorkflowStageDisabled = (stage: ComponentSelectboxOverviewPlainWorkflowStageOption) => stage.disabled === true;

  onComponentSelectboxOverviewPlainSelectedStageChange(value: unknown): void {
    this.componentSelectboxOverviewPlainSelectedStage.set(this.toComponentSelectboxOverviewPlainSingleValue(value));
  }

  private toComponentSelectboxOverviewPlainSingleValue(value: unknown): string | null {
    if (typeof value === 'string') {
      return value;
    }

    if (Array.isArray(value)) {
      const first = value[0];
      return typeof first === 'string' ? first : null;
    }

    return null;
  }

  readonly componentSelectboxExamplesPlainReleaseOwners = COMPONENT_SELECTBOX_EXAMPLES_PLAIN_RELEASE_OWNER_OPTIONS;
  readonly componentSelectboxExamplesPlainSelectedOwnerId = signal<string | null>('mina');
  readonly componentSelectboxExamplesPlainSelectedOwnerSummary = computed(() => {
    const selectedValue = this.componentSelectboxExamplesPlainSelectedOwnerId();
    if (selectedValue === null) {
      return 'none';
    }

    return this.componentSelectboxExamplesPlainReleaseOwners.find((owner) => owner.id === selectedValue)?.name ?? 'none';
  });
  readonly getComponentSelectboxExamplesPlainOwnerValue = (owner: ComponentSelectboxExamplesPlainReleaseOwnerOption) => owner.id;
  readonly getComponentSelectboxExamplesPlainOwnerLabel = (owner: ComponentSelectboxExamplesPlainReleaseOwnerOption) => owner.name;
  readonly isComponentSelectboxExamplesPlainOwnerDisabled = (owner: ComponentSelectboxExamplesPlainReleaseOwnerOption) => owner.disabled === true;

  onComponentSelectboxExamplesPlainSelectedOwnerChange(value: unknown): void {
    this.componentSelectboxExamplesPlainSelectedOwnerId.set(this.toComponentSelectboxExamplesPlainSingleValue(value));
  }

  private toComponentSelectboxExamplesPlainSingleValue(value: unknown): string | null {
    if (typeof value === 'string') {
      return value;
    }

    if (Array.isArray(value)) {
      const first = value[0];
      return typeof first === 'string' ? first : null;
    }

    return null;
  }
}
