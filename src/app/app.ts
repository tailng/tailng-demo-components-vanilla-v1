import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonHeaderBreadcrumbComponent } from './shared/common-header-breadcrumb/common-header-breadcrumb.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonHeaderBreadcrumbComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
}
