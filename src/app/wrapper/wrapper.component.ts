import { Component } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent {
  timers = [
    {color: 'grey', status: 'start', time: 0, buttonColor: ''},
    {color: 'purple', status: 'start', time: 0, buttonColor: ''},
    {color: 'turquoise', status: 'start', time: 0, buttonColor: '' }
  ];
  resetAll = false;
  changeStyle = false;

  onDeleteTimer(index: number): void{
    if (this.timers.length > 3){
      this.timers.splice(index, 1);
    }
  }

  onAddTimer(): void {
    this.timers.push({color: 'grey', status: 'start', time: 0, buttonColor: '' });
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

}
