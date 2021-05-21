import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { TimerChangerComponent } from './timerChanger/timerChanger.component';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { FormComponent } from './form/form.component';
import { TimerFormComponent } from './components/timerform/timerform.component';
import { ControlValueAccessorConnector } from './components/inputcontrol/control-value-accessor';
import { InputControlComponent } from './components/inputcontrol/input-control.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    WrapperComponent,
    TimerChangerComponent,
    InputComponent,
    ButtonComponent,
    FormComponent,
    TimerFormComponent,
    InputControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ControlValueAccessorConnector,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
