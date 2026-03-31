import { Component, signal } from '@angular/core';
import { TngTextareaComponent } from '@tailng-ui/components';

@Component({
  selector: 'app-textarea',
  imports: [TngTextareaComponent],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.css',
})
export class TextareaComponent {
  readonly value = signal('Add concise release highlights for the weekly digest.');

  onValueChange(value: string): void {
    this.value.set(value);
  }
    readonly postmortemSummary = signal(
      'Block-level announcement draft for internal release channels.',
    );
  
    onPostmortemSummaryChange(value: string): void {
      this.postmortemSummary.set(value);
    }
  }  
