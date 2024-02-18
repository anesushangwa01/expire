import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, FormBuilder} from '@angular/forms';
import {ExpiringserviceService} from '../service/expiringservice.service'
import { Router, ActivatedRoute } from '@angular/router';
import { Bakeryentry} from '../model/bakery.mode'
import { FormsModule} from '@angular/forms';
@Component({
  selector: 'app-add-products',
  standalone: true,
  imports: [MatFormFieldModule, MatDatepickerModule, MatInputModule,MatSelectModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.css'
})
export class AddProductsComponent {
// addForm?: FormGroup; 
addForm: FormGroup = new FormGroup({});
editMode  = false;
bakeryEntry? : Bakeryentry; 
paramId?: number | string ;



  // bakeryEntry?: Bakeryentry;


  constructor(private fb: FormBuilder, private ExpDataService:ExpiringserviceService, private router: Router, private activeRoute: ActivatedRoute ) {}

  ngOnInit(): void {
this.activeRoute.paramMap.subscribe(paraMap => {
  if(paraMap.has('id')){
    this.editMode = true; 
    this.paramId = +paraMap.get("id")!;
    this.bakeryEntry = this.ExpDataService.getDiaryEntry(this.paramId)
  }else{
    this.editMode = false;
  }

})

    this.addForm = this.fb.group({
      types:new FormControl(this.editMode ?  this.bakeryEntry!.types :null,  [Validators.required]),
      productname:new FormControl(this.editMode ?  this.bakeryEntry!.productname :null, [ Validators.required]),
      packedDate:  new FormControl(this.editMode ?  this.bakeryEntry!.packedDate :null, [Validators.required]),
      expdate: new FormControl(this.editMode ?  this.bakeryEntry!.expdate :null, [ Validators.required])
    
    });
    
    
  }

  onSubmit(){
   
      // console.log(this.addForm); // Submit form data here
      const newEntry = new Bakeryentry(
        this.addForm.value.img,
        this.addForm.value.types, 
     
         this.addForm.value.productname,
         this.addForm.value.packedDate,
          this.addForm.value.expdate
        
         )
    this.ExpDataService.onAddproducts(newEntry);
    this.router.navigateByUrl("/products/all");
    }

    calculateTimeLeft(packedDate: Date, expDate: Date): string {
      const millisecondsPerDay = 1000 * 60 * 60 * 24;
      const currentDate = new Date();
      const timeDifference = expDate.getTime() - packedDate.getTime();
      const daysLeft = Math.floor(timeDifference / millisecondsPerDay);
      const hoursLeft = Math.floor((timeDifference % millisecondsPerDay) / (1000 * 60 * 60));
      return `${daysLeft} days & ${hoursLeft} hours left`;


  }
   

 
}
