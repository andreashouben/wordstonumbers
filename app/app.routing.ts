import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';


const appRoutes: Routes = [
    {
        path: '2009/03/25/buchstaben-in-zahlen-umwandeln',
        redirectTo: '',
        pathMatch: 'full'
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);