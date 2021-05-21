import { Component } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})

export class WrapperComponent {
  timers = [
    { id: 1, color: 'grey', status: 'start', time: 0, buttonColor: '', name: 'First Timer', description: '', comment: '' },
    { id: 2, color: 'purple', status: 'start', time: 0, buttonColor: '', name: 'Second Timer', description: '', comment: '' },
    { id: 3, color: 'turquoise', status: 'start', time: 0, buttonColor: '', name: 'Third Timer', description: '', comment: '' }
  ];
  resetAll = false;
  changeStyle = false;
  isPopupOpen = false;

  onDeleteTimer(index: number): void {
    if (this.timers.length > 3) {
      this.timers.splice(index, 1);
    }
  }

  onAddTimer(): void {
    this.isPopupOpen = !this.isPopupOpen;
  }

  onChangeStyle(): void {
    this.changeStyle = !this.changeStyle;
  }

  onResetAll(): void {
    this.resetAll = true;
    this.timers.forEach(item => item.buttonColor = '');
  }

  onGetButtonColor(event: string, id: number): void {
    this.timers[id].buttonColor = event;
    this.resetAll = false;
  }

  newColor(event: string, index: number): void {
    this.timers[index].color = event;
  }

  trackBy(index: number, timer: any): number {
    return timer.id;
  }
  timerForm(event: any): void {
    const { name } = event;
    const { description } = event;
    const { comment } = event;
    const { count } = event;
    if (count > 1) {
      for (let i = 0; i < count; ++i) {
        this.timers.push({ id: this.timers.length, color: 'grey', status: 'start', time: 0, buttonColor: '', name, description, comment });
      }
    } else {
      this.timers.push({ id: this.timers.length, color: 'grey', status: 'start', time: 0, buttonColor: '', name, description, comment });
    }
  }
}
