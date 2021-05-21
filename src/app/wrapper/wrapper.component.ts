import {Component} from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})

export class WrapperComponent {
  timers = [
    {id: 1, color: 'grey', status: 'start', time: 0, buttonColor: '', name: 'First Timer'},
    {id: 2, color: 'purple', status: 'start', time: 0, buttonColor: '', name: 'Second Timer'},
    {id: 3, color: 'turquoise', status: 'start', time: 0, buttonColor: '', name: 'Third Timer' }
  ];
  resetAll = false;
  changeStyle = false;
  isPopupOpen = false;

  onDeleteTimer(index: number): void{
    if (this.timers.length > 3){
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
  timerForm(event: any): void{
    const { name } = event;
    this.timers.push({id: this.timers.length, color: 'grey', status: 'start', time: 0, buttonColor: '', name });
  }
}
