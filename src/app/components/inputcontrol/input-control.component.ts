import { Component, Injector, Input } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessorConnector } from './control-value-accessor';

interface InputStyle {
  ['border-color']?: string;
  ['box-shadow']?: string;
}

@Component({
  selector: 'app-input-control',
  template: `<input [type]="type" [ngStyle]="inputStyle || {}" [autocomplete]="autocomplete" [className]="inputClass" [formControl]="control">`,
  providers: [{
    provide: NG_VALUE_ACCESSOR, useExisting: InputControlComponent, multi: true
  }]
})
export class InputControlComponent extends ControlValueAccessorConnector {
  @Input() formControl: FormControl | undefined;
  @Input() formControlName: string = '';
  @Input() type?: string;
  @Input() inputClass?: string;
  @Input() autocomplete?: string;
  @Input() inputStyle?: InputStyle;

  constructor(injector: Injector) {
    super(injector);
  }
 }
