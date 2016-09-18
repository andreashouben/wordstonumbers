import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import { FormsModule }   from '@angular/forms';
import {routing} from './app.routing';


@NgModule({
    imports: [BrowserModule,
        FormsModule, routing],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }