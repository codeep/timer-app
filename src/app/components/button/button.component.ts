import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ButtonComponent {

  @Input() value?: string;
  @Output() onClick: EventEmitter<object> = new EventEmitter();
  @Input() btnType?: string;
  @Input() isDisabled?: boolean;

  public onClickButton(event: Event): void {
    this.onClick.emit(event);
  }
}
