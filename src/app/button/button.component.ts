import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ButtonComponent {

  @Input() value = '';
  @Output() onClick = new EventEmitter();

  public onClickButton(event: Event): void {
    this.onClick.emit(event);
  }

}
