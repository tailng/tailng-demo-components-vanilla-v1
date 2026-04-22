import { isPlatformBrowser } from '@angular/common';
import { Component, OnDestroy, PLATFORM_ID, inject, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {
  TngBreadcrumbComponent,
  TngBreadcrumbItemComponent,
} from '@tailng-ui/components';
import {
  applyTailngTheme,
  atlasDarkThemePreset,
  atlasThemePreset,
  defaultDarkThemePreset,
  defaultThemePreset,
  minimalDarkThemePreset,
  minimalThemePreset,
  nexusDarkThemePreset,
  nexusThemePreset,
  prismDarkThemePreset,
  prismThemePreset,
  slateDarkThemePreset,
  slateThemePreset,
  sterlingDarkThemePreset,
  sterlingThemePreset,
} from '@tailng-ui/theme';
import type { ThemeDefinition } from '@tailng-ui/theme';
import { Subscription, filter } from 'rxjs';

const STORAGE_FAMILY = 'tailng-demo-theme-family';
const STORAGE_MODE = 'tailng-demo-theme-mode';

const THEME_FAMILIES = [
  { id: 'default', label: 'Default', light: defaultThemePreset, dark: defaultDarkThemePreset },
  { id: 'minimal', label: 'Minimal', light: minimalThemePreset, dark: minimalDarkThemePreset },
  { id: 'slate', label: 'Slate', light: slateThemePreset, dark: slateDarkThemePreset },
  { id: 'nexus', label: 'Nexus', light: nexusThemePreset, dark: nexusDarkThemePreset },
  { id: 'prism', label: 'Prism', light: prismThemePreset, dark: prismDarkThemePreset },
  { id: 'atlas', label: 'Atlas', light: atlasThemePreset, dark: atlasDarkThemePreset },
  { id: 'sterling', label: 'Sterling', light: sterlingThemePreset, dark: sterlingDarkThemePreset },
] as const;

function readStoredFamilyId(): (typeof THEME_FAMILIES)[number]['id'] {
  if (typeof localStorage === 'undefined') {
    return 'default';
  }
  const v = localStorage.getItem(STORAGE_FAMILY);
  return THEME_FAMILIES.some((f) => f.id === v) ? (v as (typeof THEME_FAMILIES)[number]['id']) : 'default';
}

function readStoredMode(): 'light' | 'dark' {
  if (typeof localStorage === 'undefined') {
    return 'light';
  }
  return localStorage.getItem(STORAGE_MODE) === 'dark' ? 'dark' : 'light';
}

@Component({
  selector: 'app-common-header-breadcrumb',
  standalone: true,
  imports: [TngBreadcrumbComponent, TngBreadcrumbItemComponent],
  templateUrl: './common-header-breadcrumb.component.html',
  styleUrl: './common-header-breadcrumb.component.css',
})
export class CommonHeaderBreadcrumbComponent implements OnDestroy {
  protected readonly breadcrumbLabel = signal<string | null>(null);

  protected readonly themeFamilies = THEME_FAMILIES;

  protected readonly themeFamilyId = signal(readStoredFamilyId());

  protected readonly colorMode = signal<'light' | 'dark'>(readStoredMode());

  private readonly platformId = inject(PLATFORM_ID);

  private readonly breadcrumbRoutesSub?: Subscription;

  constructor(private readonly router: Router) {
    this.updateBreadcrumbFromUrl(this.router.url);

    this.breadcrumbRoutesSub = this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => this.updateBreadcrumbFromUrl(this.router.url));

    if (isPlatformBrowser(this.platformId)) {
      applyTailngTheme(this.resolveThemeDefinition());
    }
  }

  ngOnDestroy(): void {
    this.breadcrumbRoutesSub?.unsubscribe();
  }

  protected setColorMode(mode: 'light' | 'dark'): void {
    this.colorMode.set(mode);
    this.persistAndApplyTheme();
  }

  protected onThemeFamilyChange(event: Event): void {
    const el = event.target as HTMLSelectElement;
    const id = el.value as (typeof THEME_FAMILIES)[number]['id'];
    if (!THEME_FAMILIES.some((f) => f.id === id)) {
      return;
    }
    this.themeFamilyId.set(id);
    this.persistAndApplyTheme();
  }

  private resolveThemeDefinition(): ThemeDefinition {
    const family = THEME_FAMILIES.find((f) => f.id === this.themeFamilyId());
    if (!family) {
      return defaultThemePreset;
    }
    return this.colorMode() === 'light' ? family.light : family.dark;
  }

  private persistAndApplyTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(STORAGE_FAMILY, this.themeFamilyId());
      localStorage.setItem(STORAGE_MODE, this.colorMode());
    }
    applyTailngTheme(this.resolveThemeDefinition());
  }

  private updateBreadcrumbFromUrl(url: string): void {
    const cleaned = url.split('?')[0].split('#')[0];
    const segments = cleaned.replace(/^\/+/, '').split('/').filter(Boolean);
    const primary = segments[0] ?? 'home';

    if (primary === 'home' || primary === '') {
      this.breadcrumbLabel.set(null);
      return;
    }

    this.breadcrumbLabel.set(this.slugToTitle(primary));
  }

  private slugToTitle(slug: string): string {
    const overrides: Record<string, string> = {
      'charts-country-metrics': 'Charts',
    };

    const overridden = overrides[slug];
    if (overridden) {
      return overridden;
    }

    return slug
      .split('-')
      .filter(Boolean)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');
  }
}
