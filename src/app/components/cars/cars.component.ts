import { Component } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {

  cars:any;
  constructor(private service:VehicleService ,private router:Router){}

  ngOnInit(){
    this.service.getCars().subscribe((data)=>{
      this.cars=data;
      console.log(this.cars);
    });
  }
  openVehicle(id:any){
    this.router.navigateByUrl('/user/view+id');
  }
}
