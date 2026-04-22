import { Component } from '@angular/core';
import { TngDatepickerComponent } from '@tailng-ui/components';

import { defaultDatepickerDateAdapter, type TngDateAdapter } from '@tailng-ui/primitives';

const reportingAdapter: TngDateAdapter<Date> = {
  ...defaultDatepickerDateAdapter,
  format: (date, format, locale) => format === 'month-year' ? '2024 · APR' : defaultDatepickerDateAdapter.format(date, format, locale),
  parse: (text, locale) => defaultDatepickerDateAdapter.parse(text, locale),
};

@Component({
  selector: 'app-datepicker',
  standalone: true,
  imports: [TngDatepickerComponent],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.css',
})
export class DatepickerComponent {
  protected readonly reportingAdapter = reportingAdapter;
}
