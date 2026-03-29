import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

type TngPlaygroundCategory =
  | 'navigation'
  | 'form'
  | 'layout'
  | 'overlay'
  | 'feedback'
  | 'utility'
  | 'other';

type PlaygroundItem = Readonly<{
  path: string;
  title: string;
  category: TngPlaygroundCategory;
}>;

type PlaygroundItemView = PlaygroundItem & Readonly<{ description: string }>;

type PlaygroundCategoryGroup = Readonly<{
  key: TngPlaygroundCategory;
  label: string;
  items: readonly PlaygroundItemView[];
}>;

const CATEGORY_ORDER: readonly TngPlaygroundCategory[] = [
  'navigation',
  'form',
  'layout',
  'overlay',
  'feedback',
  'utility',
  'other',
];

const CATEGORY_LABELS: Readonly<Record<TngPlaygroundCategory, string>> = {
  navigation: 'Navigation',
  form: 'Form',
  layout: 'Layout',
  overlay: 'Overlay',
  feedback: 'Feedback',
  utility: 'Utility',
  other: 'Other',
};

const DESCRIPTIONS: Readonly<Record<string, string>> = Object.freeze({
  theme: 'Switch presets/modes and inspect semantic tokens.',
  button: 'Test primitive behavior and owned component styles.',
  copy: 'Copy payloads from direct text or DOM sources.',
  'code-block': 'Adapter-ready syntax highlighting.',
  accordion: 'Expand/collapse panels.',
  collapsible: 'Single disclosure panel.',
  menu: 'Keyboard navigation for menuitem actions.',
  'dropdown-menu': 'Triggered menu panel.',
  avatar: 'User identity display.',
  card: 'Validate card primitives.',
  tag: 'Compact status/count labels.',
  badge: 'Notification indicator.',
  separator: 'Horizontal and vertical dividers.',
  empty: 'Empty-state layout.',
  'progress-bar': 'Linear progress indicators.',
  'progress-spinner': 'Circular loader.',
  skeleton: 'Loading placeholder blocks.',
  input: 'Input primitive and wrapper.',
  label: 'Accessible form labels.',
  'input-otp': 'Segmented OTP entry.',
  radio: 'Grouped single-select behavior.',
  checkbox: 'Checked/unchecked/mixed tri-state.',
  textarea: 'Multiline text input.',
  icons: 'Icon library with Lucide integration.',
  'charts-country-metrics': 'Country metrics with bar/line chart.',
  listbox: 'CDK keyboard and multi-select.',
  dialog: 'Backdrop, focus-trap.',
  popover: 'Trigger semantics and dismissal.',
  tooltip: 'Hover/focus helper text.',
  toast: 'Notification system.',
  'context-menu': 'Context-triggered actions.',
  menubar: 'Horizontal menu surface.',
  'navigation-menu': 'Structured navigation list.',
  breadcrumb: 'Hierarchical navigation trail.',
  toolbar: 'Action controls grouping.',
  tabs: 'Tabbed container surface.',
  stepper: 'Multi-step flow surface.',
  'toggle-group': 'Grouped toggle controls.',
  'button-toggle': 'Toggleable button options.',
  switch: 'Two-state on/off control.',
  toggle: 'Icon-style pressed button.',
  slider: 'Range-based input.',
  chips: 'Compact item set.',
  combobox: 'Text input with options popup.',
  select: 'Single-choice dropdown.',
  autocomplete: 'Dynamic suggestion list.',
  'multi-autocomplete': 'Chips input with multi-select suggestions.',
  multiselect: 'Multiple-choice listbox.',
  grid: 'Keyboard-navigable grid.',
  tree: 'Hierarchical expandable list.',
  drawer: 'Slide-in overlay panel.',
  'bottom-sheet': 'Partial-height overlay sheet.',
});

const PLAYGROUND_ITEMS: readonly PlaygroundItem[] = Object.freeze([
  { path: 'theme', title: 'Theme', category: 'other' },
  { path: 'button', title: 'Button', category: 'utility' },
  { path: 'copy', title: 'Copy', category: 'utility' },
  { path: 'code-block', title: 'Code Block', category: 'utility' },
  { path: 'accordion', title: 'Accordion', category: 'layout' },
  { path: 'collapsible', title: 'Collapsible', category: 'layout' },
  { path: 'menu', title: 'Menu', category: 'navigation' },
  { path: 'dropdown-menu', title: 'Dropdown Menu', category: 'navigation' },
  { path: 'avatar', title: 'Avatar', category: 'utility' },
  { path: 'card', title: 'Card', category: 'layout' },
  { path: 'tag', title: 'Tag', category: 'utility' },
  { path: 'badge', title: 'Badge', category: 'utility' },
  { path: 'separator', title: 'Separator', category: 'layout' },
  { path: 'empty', title: 'Empty', category: 'feedback' },
  { path: 'progress-bar', title: 'Progress Bar', category: 'feedback' },
  { path: 'progress-spinner', title: 'Progress Spinner', category: 'feedback' },
  { path: 'skeleton', title: 'Skeleton', category: 'feedback' },
  { path: 'input', title: 'Input', category: 'form' },
  { path: 'label', title: 'Label', category: 'form' },
  { path: 'input-otp', title: 'Input OTP', category: 'form' },
  { path: 'radio', title: 'Radio', category: 'form' },
  { path: 'checkbox', title: 'Checkbox', category: 'form' },
  { path: 'textarea', title: 'Textarea', category: 'form' },
  { path: 'icons', title: 'Icon', category: 'utility' },
  { path: 'charts-country-metrics', title: 'Charts', category: 'other' },
  { path: 'listbox', title: 'ListBox', category: 'form' },
  { path: 'dialog', title: 'Dialog', category: 'overlay' },
  { path: 'popover', title: 'Popover', category: 'overlay' },
  { path: 'tooltip', title: 'Tooltip', category: 'overlay' },
  { path: 'toast', title: 'Toast', category: 'feedback' },
  { path: 'context-menu', title: 'Context Menu', category: 'navigation' },
  { path: 'menubar', title: 'Menubar', category: 'navigation' },
  { path: 'navigation-menu', title: 'Navigation Menu', category: 'navigation' },
  { path: 'breadcrumb', title: 'Breadcrumb', category: 'navigation' },
  { path: 'toolbar', title: 'Toolbar', category: 'navigation' },
  { path: 'tabs', title: 'Tabs', category: 'navigation' },
  { path: 'stepper', title: 'Stepper', category: 'layout' },
  { path: 'toggle-group', title: 'Toggle Group', category: 'form' },
  { path: 'button-toggle', title: 'Button Toggle', category: 'form' },
  { path: 'switch', title: 'Switch', category: 'form' },
  { path: 'toggle', title: 'Toggle', category: 'form' },
  { path: 'slider', title: 'Slider', category: 'form' },
  { path: 'chips', title: 'Chips', category: 'form' },
  { path: 'combobox', title: 'Combobox', category: 'form' },
  { path: 'select', title: 'Select', category: 'form' },
  { path: 'autocomplete', title: 'Autocomplete', category: 'form' },
  { path: 'multi-autocomplete', title: 'Multi Autocomplete', category: 'form' },
  { path: 'multiselect', title: 'Multiselect', category: 'form' },
  { path: 'grid', title: 'Grid', category: 'layout' },
  { path: 'tree', title: 'Tree', category: 'layout' },
  { path: 'drawer', title: 'Drawer', category: 'layout' },
  { path: 'bottom-sheet', title: 'Bottom Sheet', category: 'layout' },
]);

const FALLBACK_DESCRIPTION = 'Playground demo component.';

const PLAYGROUND_ITEMS_VIEW: readonly PlaygroundItemView[] = Object.freeze(
  PLAYGROUND_ITEMS.map((item) => ({
    ...item,
    description: DESCRIPTIONS[item.path] ?? FALLBACK_DESCRIPTION,
  }))
);

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  protected readonly categories: readonly PlaygroundCategoryGroup[] = CATEGORY_ORDER.map((key) => ({
    key,
    label: CATEGORY_LABELS[key],
    items: PLAYGROUND_ITEMS_VIEW.filter((item) => item.category === key),
  })).filter((category) => category.items.length > 0);
}
