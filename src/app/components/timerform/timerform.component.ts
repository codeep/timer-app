import { Component, OnInit } from '@angular/core';
import {AbstractControl, ControlContainer, FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms';

@Component({
  selector: 'app-timerform',
  templateUrl: './timerform.component.html',
  styleUrls: ['./timerform.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }],
})
export class TimerFormComponent implements OnInit {
  form: FormGroup = this.ctrlContainer.form;

  constructor(
    private ctrlContainer: FormGroupDirective,
    private formBuilder: FormBuilder) { }

    get name(): AbstractControl | null {
    return this.form?.controls?.timerForm?.get('name');
    }

    get timerCount(): AbstractControl | null {
      return this.form?.controls?.timerForm?.get('timerCount');
    }

  ngOnInit(): void {
    this.form = this.ctrlContainer.form;
    this.form.addControl('timerForm',
      this.formBuilder.group({
        name: [null, [ Validators.required,
          Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9 ]+$'),
          Validators.maxLength(28)
        ]],
        description: [null, null],
        comment: [null, null],
        timerCount: [null, [Validators.required, Validators.min(1), Validators.max(50)]]
      }));
  }
}
