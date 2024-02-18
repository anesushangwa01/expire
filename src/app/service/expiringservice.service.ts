import { Injectable } from '@angular/core';
import {Bakeryentry} from '../model/bakery.mode'
import { Subject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})


export class ExpiringserviceService {

bakerySubject = new Subject<Bakeryentry[]>();
  bakeryEntry: Bakeryentry[] = [
    new Bakeryentry("path/to/image1.jpg", "bakery", "Cake", new Date("2024-01-12"), new Date("2024-02-12"))
    // new Bakeryentry("path/to/image2.jpg", "bread", new Date("2024-03-01"), new Date("2024-08-7"),   "bakery"),
    // new Bakeryentry("path/to/image3.jpg", "chocolate cake", new Date("2024-01-01"), new Date("2025-12-20"),   "bakery"),
    // new Bakeryentry("path/to/image4.jpg", "rock bans", new Date("2024-01-01"), new Date("2024-07-2"),  "bakery"),
    // new Bakeryentry("path/to/image4.jpg", "Sadza", new Date("2024-01-01"), new Date("2024-07-2"),  "food"),
    // new Bakeryentry("path/to/image4.jpg", "Banana", new Date("2024-01-01"), new Date("2024-07-2"),  "fruits & veg")
  ];
  
  onDelete(index: number){
    this.bakeryEntry.splice(index,1);
    this.bakerySubject.next(this.bakeryEntry);
  }
  
  onAddproducts(bakeryEntry: Bakeryentry ){
   this.bakeryEntry.push(bakeryEntry);
   this.bakerySubject.next(this.bakeryEntry);
  }
  getDiaryEntry(index: number){
    return{...this.bakeryEntry![index]}
   }
  
}
