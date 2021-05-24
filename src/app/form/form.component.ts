import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TimerInfo } from '../interfaces/timer';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class FormComponent {

  @Output() popupOpened: EventEmitter<object> = new EventEmitter();
  @Output() timerFormSubmit: EventEmitter<TimerInfo> = new EventEmitter<TimerInfo>();
  mainForm = new FormGroup({});

  get timerName(): string {
    return this.mainForm.value?.timerForm?.name;
  }
  get timerDescription(): string {
    return this.mainForm.value?.timerForm?.description;
  }
  get timerComment(): string {
    return this.mainForm.value?.timerForm?.comment;
  }
  get timerCount(): number {
    return this.mainForm.value?.timerForm?.timerCount;
  }
  closeDialog(): void{
    this.popupOpened.emit();
  }

  onSubmit(): void {
    this.popupOpened.emit();
    this.timerFormSubmit.emit({ name : this.timerName, description: this.timerDescription, comment: this.timerComment,
      count: this.timerCount });
  }
}
