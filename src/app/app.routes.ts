import { Routes } from '@angular/router';
import { DEFAULT_ROUTE } from './app.route.default';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: DEFAULT_ROUTE },

  {
    path: 'home',
    loadComponent: () =>
      import('./playground/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'docs',
    loadComponent: () =>
      import('./playground/docs/docs.component').then((m) => m.DocsComponent),
  },

  // Playground: lazy-loaded feature components (playground/<category>/<slug>/)

  {
    path: 'theme',
    loadComponent: () =>
      import('./playground/other/theme/theme.component').then((m) => m.ThemeComponent),
  },
  {
    path: 'button',
    loadComponent: () =>
      import('./playground/utility/button/button.component').then((m) => m.ButtonComponent),
  },
  {
    path: 'copy',
    loadComponent: () =>
      import('./playground/utility/copy/copy.component').then((m) => m.CopyComponent),
  },
  {
    path: 'code-block',
    loadComponent: () =>
      import('./playground/utility/code-block/code-block.component').then((m) => m.CodeBlockComponent),
  },
  {
    path: 'accordion',
    loadComponent: () =>
      import('./playground/layout/accordion/accordion.component').then((m) => m.AccordionComponent),
  },
  {
    path: 'collapsible',
    loadComponent: () =>
      import('./playground/layout/collapsible/collapsible.component').then((m) => m.CollapsibleComponent),
  },
  {
    path: 'menu',
    loadComponent: () =>
      import('./playground/navigation/menu/menu.component').then((m) => m.MenuComponent),
  },
  {
    path: 'dropdown-menu',
    loadComponent: () =>
      import('./playground/navigation/dropdown-menu/dropdown-menu.component').then((m) => m.DropdownMenuComponent),
  },
  {
    path: 'avatar',
    loadComponent: () =>
      import('./playground/utility/avatar/avatar.component').then((m) => m.AvatarComponent),
  },
  {
    path: 'card',
    loadComponent: () =>
      import('./playground/layout/card/card.component').then((m) => m.CardComponent),
  },
  {
    path: 'tag',
    loadComponent: () =>
      import('./playground/utility/tag/tag.component').then((m) => m.TagComponent),
  },
  {
    path: 'badge',
    loadComponent: () =>
      import('./playground/utility/badge/badge.component').then((m) => m.BadgeComponent),
  },
  {
    path: 'separator',
    loadComponent: () =>
      import('./playground/layout/separator/separator.component').then((m) => m.SeparatorComponent),
  },
  {
    path: 'empty',
    loadComponent: () =>
      import('./playground/feedback/empty/empty.component').then((m) => m.EmptyComponent),
  },
  {
    path: 'progress-bar',
    loadComponent: () =>
      import('./playground/feedback/progress-bar/progress-bar.component').then((m) => m.ProgressBarComponent),
  },
  {
    path: 'progress-spinner',
    loadComponent: () =>
      import('./playground/feedback/progress-spinner/progress-spinner.component').then((m) => m.ProgressSpinnerComponent),
  },
  {
    path: 'skeleton',
    loadComponent: () =>
      import('./playground/feedback/skeleton/skeleton.component').then((m) => m.SkeletonComponent),
  },
  {
    path: 'input',
    loadComponent: () =>
      import('./playground/form/input/input-demo.component').then((m) => m.InputDemoComponent),
  },
  {
    path: 'label',
    loadComponent: () =>
      import('./playground/form/label/label.component').then((m) => m.LabelComponent),
  },
  {
    path: 'form-field',
    loadComponent: () =>
      import('./playground/form/form-field/form-field.component').then((m) => m.FormFieldComponent),
  },
  {
    path: 'input-otp',
    loadComponent: () =>
      import('./playground/form/input-otp/input-otp.component').then((m) => m.InputOtpComponent),
  },
  {
    path: 'radio',
    loadComponent: () =>
      import('./playground/form/radio/radio.component').then((m) => m.RadioComponent),
  },
  {
    path: 'checkbox',
    loadComponent: () =>
      import('./playground/form/checkbox/checkbox.component').then((m) => m.CheckboxComponent),
  },
  {
    path: 'textarea',
    loadComponent: () =>
      import('./playground/form/textarea/textarea.component').then((m) => m.TextareaComponent),
  },
  {
    path: 'icons',
    loadComponent: () =>
      import('./playground/utility/icons/icons.component').then((m) => m.IconsComponent),
  },
  {
    path: 'charts-country-metrics',
    loadComponent: () =>
      import('./playground/other/charts-country-metrics/charts-country-metrics.component').then((m) => m.ChartsCountryMetricsComponent),
  },
  {
    path: 'listbox',
    loadComponent: () =>
      import('./playground/form/listbox/listbox.component').then((m) => m.ListboxComponent),
  },
  {
    path: 'dialog',
    loadComponent: () =>
      import('./playground/overlay/dialog/dialog.component').then((m) => m.DialogComponent),
  },
  {
    path: 'popover',
    loadComponent: () =>
      import('./playground/overlay/popover/popover.component').then((m) => m.PopoverComponent),
  },
  {
    path: 'tooltip',
    loadComponent: () =>
      import('./playground/overlay/tooltip/tooltip.component').then((m) => m.TooltipComponent),
  },
  {
    path: 'toast',
    loadComponent: () =>
      import('./playground/feedback/toast/toast.component').then((m) => m.ToastComponent),
  },
  {
    path: 'context-menu',
    loadComponent: () =>
      import('./playground/navigation/context-menu/context-menu.component').then((m) => m.ContextMenuComponent),
  },
  {
    path: 'menubar',
    loadComponent: () =>
      import('./playground/navigation/menubar/menubar.component').then((m) => m.MenubarComponent),
  },
  {
    path: 'navigation-menu',
    loadComponent: () =>
      import('./playground/navigation/navigation-menu/navigation-menu.component').then((m) => m.NavigationMenuComponent),
  },
  {
    path: 'breadcrumb',
    loadComponent: () =>
      import('./playground/navigation/breadcrumb/breadcrumb.component').then((m) => m.BreadcrumbComponent),
  },
  {
    path: 'toolbar',
    loadComponent: () =>
      import('./playground/navigation/toolbar/toolbar.component').then((m) => m.ToolbarComponent),
  },
  {
    path: 'tabs',
    loadComponent: () =>
      import('./playground/navigation/tabs/tabs.component').then((m) => m.TabsComponent),
  },
  {
    path: 'stepper',
    loadComponent: () =>
      import('./playground/layout/stepper/stepper.component').then((m) => m.StepperComponent),
  },
  {
    path: 'toggle-group',
    loadComponent: () =>
      import('./playground/form/toggle-group/toggle-group.component').then((m) => m.ToggleGroupComponent),
  },
  {
    path: 'button-toggle',
    loadComponent: () =>
      import('./playground/form/button-toggle/button-toggle.component').then((m) => m.ButtonToggleComponent),
  },
  {
    path: 'switch',
    loadComponent: () =>
      import('./playground/form/switch/switch.component').then((m) => m.SwitchComponent),
  },
  {
    path: 'toggle',
    loadComponent: () =>
      import('./playground/form/toggle/toggle.component').then((m) => m.ToggleComponent),
  },
  {
    path: 'slider',
    loadComponent: () =>
      import('./playground/form/slider/slider.component').then((m) => m.SliderComponent),
  },
  {
    path: 'chips',
    loadComponent: () =>
      import('./playground/form/chips/chips.component').then((m) => m.ChipsComponent),
  },
  {
    path: 'combobox',
    loadComponent: () =>
      import('./playground/form/combobox/combobox.component').then((m) => m.ComboboxComponent),
  },
  {
    path: 'select',
    loadComponent: () =>
      import('./playground/form/select/select.component').then((m) => m.SelectComponent),
  },
  {
    path: 'autocomplete',
    loadComponent: () =>
      import('./playground/form/autocomplete/autocomplete.component').then((m) => m.AutocompleteComponent),
  },
  {
    path: 'multi-autocomplete',
    loadComponent: () =>
      import('./playground/form/multi-autocomplete/multi-autocomplete.component').then((m) => m.MultiAutocompleteComponent),
  },
  {
    path: 'multiselect',
    loadComponent: () =>
      import('./playground/form/multiselect/multiselect.component').then((m) => m.MultiselectComponent),
  },
  {
    path: 'grid',
    loadComponent: () =>
      import('./playground/layout/grid/grid.component').then((m) => m.GridComponent),
  },
  {
    path: 'tree',
    loadComponent: () =>
      import('./playground/layout/tree/tree.component').then((m) => m.TreeComponent),
  },
  {
    path: 'drawer',
    loadComponent: () =>
      import('./playground/layout/drawer/drawer.component').then((m) => m.DrawerComponent),
  },
  {
    path: 'bottom-sheet',
    loadComponent: () =>
      import('./playground/layout/bottom-sheet/bottom-sheet.component').then((m) => m.BottomSheetComponent),
  },
];
