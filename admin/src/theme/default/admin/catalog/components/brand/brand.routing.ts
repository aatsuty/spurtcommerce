/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 Piccosoft Software Labs Pvt Ltd
 * Author Piccosoft Software Labs Pvt Ltd <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
import {NgModule} from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';

// Component
import {BrandAddComponent} from './add/add.component';
import {BrandListComponent} from './list/list.component';

const brandRoutes: Routes = [
    {path: '', redirectTo: 'list', pathMatch: 'full'},
    {path: 'list', component: BrandListComponent},
    {path: 'add', component: BrandAddComponent},
    {
        path: 'edit/:id',
        component: BrandAddComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(brandRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class BrandRoutingModule {
}
