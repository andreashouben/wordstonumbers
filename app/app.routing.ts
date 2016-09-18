import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CalcComponent} from './calc.component';


const appRoutes: Routes = [
    {
        path: '',
        component: CalcComponent
    },
     { path: '**', redirectTo: '' }  
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);