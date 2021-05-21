import {ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class FormComponent {

  @Output() popupOpened: EventEmitter<object> = new EventEmitter();
  @Output() timerFormSubmit: EventEmitter<object> = new EventEmitter();
  isHidden: boolean = false;
  mainForm = new FormGroup({});

  get timerName(): string {
    return this.mainForm.value?.timerForm?.name;
  }

  closeDialog(): void{
    this.popupOpened.emit();
  }

  onSubmit(): void {
    this.popupOpened.emit();
    this.timerFormSubmit.emit({name : this.timerName});
  }
}
