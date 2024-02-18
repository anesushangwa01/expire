import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {BakeryComponent} from '../bakery/bakery.component'



@Component({
  selector: 'app-header-side-bar',
  standalone: true,
  imports: [MatToolbarModule, RouterModule, CommonModule, BakeryComponent],
  templateUrl: './header-side-bar.component.html',
  styleUrl: './header-side-bar.component.css'
})
export class HeaderSideBarComponent {
  types?: string;
}
