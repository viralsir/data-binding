import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StringIntropolationComponent } from './string-intropolation/string-intropolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TemplateRefComponent } from './template-ref/template-ref.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import {FormsModule ,ReactiveFormsModule} from "@angular/forms";
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ModelDrivenFormComponent } from './model-driven-form/model-driven-form.component';

@NgModule({
  declarations: [
    AppComponent,
    StringIntropolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TemplateRefComponent,
    TwoWayBindingComponent,
    TemplateDrivenFormComponent,
    ModelDrivenFormComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
