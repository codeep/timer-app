import { Component, Input, OnChanges, Output, EventEmitter, OnDestroy } from '@angular/core';
import { of, Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})

export class TimerComponent implements OnChanges, OnDestroy {
  @Output() buttonColor: EventEmitter<string> = new EventEmitter();
  timerStarted = false;
  @Input() resetTimer?: boolean;
  @Input() bgColor?: string;
  @Input() timerName: string = '';
  timer$?: Subscription;
  isPaused = false;
  second = 0;

  ngOnChanges(): void {
    if (this.resetTimer) {
      this.resetTimer = false;
      this.timerStarted = false;
      this.second = 0;
      if (this.timer$) {
        this.timer$.unsubscribe();
      }
    }
  }
  ngOnDestroy(): void {
    if (this.timer$) {
      this.timer$.unsubscribe();
    }
  }
  startTimer(): void {
    this.timerStarted = true;
    if (!this.timer$ || this.timer$.closed) {
      this.timer$ = timer(0, 100).pipe(
        switchMap((counter) => {
          const count = this.second > counter ? this.second + 1 : counter;
          return of(count);
        })
      ).subscribe(sec => {
           this.second = sec;
        });
      this.buttonColor.emit('green');
    }
  }
  pauseTimer(): void{
    if (this.timerStarted){
      this.timerStarted = false;
      this.isPaused = true;
      this.buttonColor.emit('#d4e83c');
      if (this.timer$) {
        this.timer$.unsubscribe();
      }
    }
  }
  resetTime(): void{
    this.timerStarted = false;
    this.second = 0;
    if (this.timer$) {
      this.timer$.unsubscribe();
    }
    this.buttonColor.emit('');
  }
}
