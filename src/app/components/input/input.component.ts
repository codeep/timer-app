import { Component, Output, EventEmitter, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent {
  @Output() modelChange: EventEmitter<string> = new EventEmitter();
  @Input() type?: string;
  @Input() value?: string;
  @Output() timerFormSubmit: EventEmitter<object> = new EventEmitter();
  @Output() popupOpened: EventEmitter<object> = new EventEmitter();
  onDetectChange(event: string): void{
    if (this.modelChange) {
      this.modelChange.emit(event);
    }
  }
}
