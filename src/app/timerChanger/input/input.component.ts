import {Component, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent {
  @Output() color: EventEmitter<string> = new EventEmitter();

  onDetectChange(event: string): void{
      this.color.emit(event);
  }
}
