import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-timerchanger',
  templateUrl: './timerChanger.component.html',
  styleUrls: ['./timerChanger.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerChangerComponent {

  @Input() buttonColor = '';
  @Input() buttonId = 0;
  @Output() timerColor = new EventEmitter();
  @Output() deleteTimer = new EventEmitter();

  newColor(event: string): void{
    this.timerColor.emit(event);
  }
  onDeleteTimer(): void{
    this.deleteTimer.emit('delete');
  }
}
