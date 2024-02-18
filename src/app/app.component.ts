import { Component } from '@angular/core';
import{HeaderSideBarComponent} from './header-side-bar/header-side-bar.component';
import {BakeryComponent} from './bakery/bakery.component'
import {AddProductsComponent} from './add-products/add-products.component'
import { RouterOutlet , RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderSideBarComponent,  RouterModule,BakeryComponent, AddProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'expire';
}
