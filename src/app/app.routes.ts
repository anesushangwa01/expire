import { Routes } from '@angular/router';
import{HeaderSideBarComponent} from './header-side-bar/header-side-bar.component';
import {BakeryComponent} from './bakery/bakery.component';
import {AddProductsComponent}   from './add-products/add-products.component';

export const routes: Routes = [


    { path: 'header', component: HeaderSideBarComponent },
    { path: '', redirectTo: '/products/all', pathMatch: 'full' },
    { path: 'products/:category', component: BakeryComponent },
    { path: 'add', component: AddProductsComponent },
    { path: 'edit/:id', component: AddProductsComponent }
];
