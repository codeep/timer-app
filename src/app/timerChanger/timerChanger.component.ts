import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-timerchanger',
  templateUrl: './timerChanger.component.html',
  styleUrls: ['./timerChanger.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerChangerComponent {

  @Input() buttonColor: string = '';
  @Input() buttonId: number = 0;
  @Input() numberOfTimers: number = 0;
  @Output() timerColor: EventEmitter<string>  = new EventEmitter();
  @Output() deleteTimer: EventEmitter<string> = new EventEmitter();

  newColor(event: string): void{
    this.timerColor.emit(event);
  }
  onDeleteTimer(): void{
    this.deleteTimer.emit('delete');
  }
}
