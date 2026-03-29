import { Component, OnDestroy, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {
  TngBreadcrumbComponent,
  TngBreadcrumbItemComponent,
} from '@tailng-ui/components';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-common-header-breadcrumb',
  standalone: true,
  imports: [TngBreadcrumbComponent, TngBreadcrumbItemComponent],
  templateUrl: './common-header-breadcrumb.component.html',
  styleUrl: './common-header-breadcrumb.component.css',
})
export class CommonHeaderBreadcrumbComponent implements OnDestroy {
  protected readonly breadcrumbLabel = signal<string | null>(null);

  private readonly breadcrumbRoutesSub?: Subscription;

  constructor(private readonly router: Router) {
    this.updateBreadcrumbFromUrl(this.router.url);

    this.breadcrumbRoutesSub = this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => this.updateBreadcrumbFromUrl(this.router.url));
  }

  ngOnDestroy(): void {
    this.breadcrumbRoutesSub?.unsubscribe();
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
