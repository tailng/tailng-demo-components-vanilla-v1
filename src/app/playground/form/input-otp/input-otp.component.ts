import { Component, signal } from '@angular/core';
import { TngInputOtpComponent } from '@tailng-ui/components';

@Component({
  selector: 'app-input-otp',
  imports: [TngInputOtpComponent],
  templateUrl: './input-otp.component.html',
  styleUrl: './input-otp.component.css',
})
export class InputOtpComponent {
  readonly componentInputOtpOverviewPlainValue = signal('12');
  readonly componentInputOtpOverviewPlainComplete = signal('');

  onComponentInputOtpOverviewPlainValueChange(nextValue: string): void {
    this.componentInputOtpOverviewPlainValue.set(nextValue);
    if (nextValue.length < 6) {
      this.componentInputOtpOverviewPlainComplete.set('');
    }
  }

  onComponentInputOtpOverviewPlainComplete(nextValue: string): void {
    this.componentInputOtpOverviewPlainComplete.set(nextValue);
  }

  
  readonly componentInputOtpStylingPlainValue = signal('37');

  onComponentInputOtpStylingPlainValueChange(nextValue: string): void {
    this.componentInputOtpStylingPlainValue.set(nextValue);
  }

  
  readonly componentInputOtpExamplesPasscodePlainValue = signal('28');
  readonly componentInputOtpExamplesPasscodePlainComplete = signal('');

  onComponentInputOtpExamplesPasscodePlainValueChange(nextValue: string): void {
    this.componentInputOtpExamplesPasscodePlainValue.set(nextValue);
    if (nextValue.length < 6) {
      this.componentInputOtpExamplesPasscodePlainComplete.set('');
    }
  }

  onComponentInputOtpExamplesPasscodePlainComplete(nextValue: string): void {
    this.componentInputOtpExamplesPasscodePlainComplete.set(nextValue);
  }

  
  readonly componentInputOtpExamplesRecoveryPlainValue = signal('A1B');

  onComponentInputOtpExamplesRecoveryPlainValueChange(nextValue: string): void {
    this.componentInputOtpExamplesRecoveryPlainValue.set(nextValue);
  }
}