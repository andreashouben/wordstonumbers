import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CalcComponent} from './calc.component';
import {HomeComponent} from './home.component';
import { FormsModule }   from '@angular/forms';
import {routing} from './app.routing';


@NgModule({
    imports: [BrowserModule,
        FormsModule, routing],
    declarations: [CalcComponent,
    HomeComponent],
    bootstrap: [HomeComponent]
})
export class AppModule { }