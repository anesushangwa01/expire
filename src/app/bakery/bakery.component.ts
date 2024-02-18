import { Component, OnChanges, OnDestroy } from '@angular/core';
import {ExpiringserviceService} from '../service/expiringservice.service'
import {HeaderSideBarComponent} from '../header-side-bar/header-side-bar.component'
import {Bakeryentry} from '../model/bakery.mode'
import { CommonModule } from '@angular/common';
import {Subscription} from 'rxjs';

import { RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-bakery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bakery.component.html',
  styleUrl: './bakery.component.css'
})
export class BakeryComponent implements OnDestroy {
  bakeryEntry?: Bakeryentry[];

  types?: string;
  
  bakerySubcription = new Subscription();

  constructor(private bakeryService: ExpiringserviceService, private route: ActivatedRoute, private router: Router) {
    
   }

 

 


   ngOnDestroy(): void {
      this.bakerySubcription.unsubscribe();
   }
  ngOnInit(): void {
    this.bakerySubcription = this.bakeryService.bakerySubject.subscribe(bakeryEntry => {
      this.bakeryEntry =bakeryEntry;
    })
    this.bakeryEntry = this.bakeryService.bakeryEntry;


    this.route.paramMap.subscribe(params => {
      const category = params.get('category');
      if (category !== null) {
        this.types = category;
        this.filterProductsByCategory();
      }
    });
 
 


    
  }

  filterProductsByCategory() {
    if (this.types === 'all') {
      this.bakeryEntry = this.bakeryService.bakeryEntry;
    } else {
      this.bakeryEntry = this.bakeryService.bakeryEntry.filter(product => product.types.toLowerCase() === this.types?.toLowerCase());
    }
  }


  onDelete(index: number){
    // console.log(index)
    this.bakeryService.onDelete(index);


  
   
  }

  onEdit(index: number){
    this.router.navigate(["edit", index])
     
  }



  // calculateTimeLeft(packedDate: Date, expDate: Date): string {
  //   const millisecondsPerDay = 1000 * 60 * 60 * 24;
  //   const currentDate = new Date();
  //   const timeDifference = expDate.getTime() - packedDate.getTime();
  //   const daysLeft = Math.floor(timeDifference / millisecondsPerDay);
  //   const hoursLeft = Math.floor((timeDifference % millisecondsPerDay) / (1000 * 60 * 60));
  //   return `${daysLeft} days & ${hoursLeft} hours left`;
   
  // }

  calculateTimeLeft(packedDate: Date, expDate: Date): string {
    // Ensure valid Date objects
    packedDate = new Date(packedDate);
    expDate = new Date(expDate);
  
    // Calculate time difference in milliseconds
    const timeDifference = expDate.getTime() - packedDate.getTime();
    // Handle negative time difference (expired)
    if (timeDifference < 0) {
     console.log('something expire')
    }
  
    
    // Calculate days and hours, rounding hours
    const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.round((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  
    // Return formatted string
    return `${daysLeft} day${daysLeft > 1 ? 's' : ''} & ${hoursLeft} hour${hoursLeft > 1 ? 's' : ''} left`;
  }

  
}
