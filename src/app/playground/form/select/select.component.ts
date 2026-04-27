import { Component, computed, signal } from '@angular/core';
import { TngSelectComponent } from '@tailng-ui/components';

interface ComponentSelectOverviewPlainWorkflowStageOption {
  readonly value: string;
  readonly label: string;
  readonly note: string;
  readonly disabled?: boolean;
}

interface ComponentSelectExamplesPlainReleaseOwnerOption {
  readonly id: string;
  readonly name: string;
  readonly team: string;
  readonly timezone: string;
  readonly disabled?: boolean;
}

const COMPONENT_SELECT_OVERVIEW_PLAIN_WORKFLOW_STAGE_OPTIONS: readonly ComponentSelectOverviewPlainWorkflowStageOption[] =
  Object.freeze([
    { value: 'draft', label: 'Draft', note: 'Internal drafting only.' },
    { value: 'review', label: 'In review', note: 'Waiting on editorial review.' },
    { value: 'qa', label: 'QA ready', note: 'Approved for validation.' },
    { value: 'live', label: 'Live', note: 'Already published.', disabled: true },
  ]);

const COMPONENT_SELECT_EXAMPLES_PLAIN_RELEASE_OWNER_OPTIONS: readonly ComponentSelectExamplesPlainReleaseOwnerOption[] =
  Object.freeze([
    { id: 'abigail', name: 'Abigail Chen', team: 'Design systems', timezone: 'UTC-8' },
    { id: 'mina', name: 'Mina Lee', team: 'Core UI', timezone: 'UTC-5' },
    { id: 'omar', name: 'Omar Aziz', team: 'Compliance', timezone: 'UTC+1', disabled: true },
    { id: 'sanjay', name: 'Sanjay Patel', team: 'Documentation', timezone: 'UTC+5:30' },
  ]);

@Component({
  selector: 'app-component-select-overview-plain-example',
  standalone: true,
  imports: [TngSelectComponent],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css',
})
export class SelectComponent {
  readonly componentSelectOverviewPlainWorkflowStages =
    COMPONENT_SELECT_OVERVIEW_PLAIN_WORKFLOW_STAGE_OPTIONS;
  readonly componentSelectExamplesPlainReleaseOwners =
    COMPONENT_SELECT_EXAMPLES_PLAIN_RELEASE_OWNER_OPTIONS;

  readonly componentSelectOverviewPlainSelectedStage = signal<string | null>('review');
  readonly componentSelectExamplesPlainSelectedOwnerId = signal<string | null>('mina');

  readonly componentSelectOverviewPlainSelectedStageSummary = computed(() => {
    const selectedValue = this.componentSelectOverviewPlainSelectedStage();

    if (selectedValue === null) {
      return 'none';
    }

    return (
      this.componentSelectOverviewPlainWorkflowStages.find((stage) => stage.value === selectedValue)
        ?.label ?? 'none'
    );
  });

  readonly componentSelectExamplesPlainSelectedOwnerSummary = computed(() => {
    const selectedValue = this.componentSelectExamplesPlainSelectedOwnerId();

    if (selectedValue === null) {
      return 'none';
    }

    return (
      this.componentSelectExamplesPlainReleaseOwners.find((owner) => owner.id === selectedValue)
        ?.name ?? 'none'
    );
  });

  readonly getComponentSelectOverviewPlainWorkflowStageValue = (
    stage: ComponentSelectOverviewPlainWorkflowStageOption,
  ) => stage.value;
  readonly getComponentSelectOverviewPlainWorkflowStageLabel = (
    stage: ComponentSelectOverviewPlainWorkflowStageOption,
  ) => stage.label;
  readonly isComponentSelectOverviewPlainWorkflowStageDisabled = (
    stage: ComponentSelectOverviewPlainWorkflowStageOption,
  ) => stage.disabled === true;

  readonly getComponentSelectExamplesPlainOwnerValue = (
    owner: ComponentSelectExamplesPlainReleaseOwnerOption,
  ) => owner.id;
  readonly getComponentSelectExamplesPlainOwnerLabel = (
    owner: ComponentSelectExamplesPlainReleaseOwnerOption,
  ) => owner.name;
  readonly isComponentSelectExamplesPlainOwnerDisabled = (
    owner: ComponentSelectExamplesPlainReleaseOwnerOption,
  ) => owner.disabled === true;

  onComponentSelectOverviewPlainSelectedStageChange(value: unknown): void {
    this.componentSelectOverviewPlainSelectedStage.set(
      this.toComponentSelectOverviewPlainSingleValue(value),
    );
  }

  onComponentSelectExamplesPlainSelectedOwnerChange(value: unknown): void {
    this.componentSelectExamplesPlainSelectedOwnerId.set(
      this.toComponentSelectExamplesPlainSingleValue(value),
    );
  }

  private toComponentSelectOverviewPlainSingleValue(value: unknown): string | null {
    if (typeof value === 'string') {
      return value;
    }

    if (Array.isArray(value)) {
      const first = value[0];
      return typeof first === 'string' ? first : null;
    }

    return null;
  }

  private toComponentSelectExamplesPlainSingleValue(value: unknown): string | null {
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
