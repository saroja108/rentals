import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleService } from '../../services/vehicle.service';
import { WishlistService } from '../../services/wishlist.service';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-viewvehicles',
  templateUrl: './viewvehicles.component.html',
  styleUrl: './viewvehicles.component.css'
})
export class ViewvehiclesComponent {
  vid:any;vehicle:any;orderedvehicle:any;uname:any;uaddress:any;utime:any;neworder:any;
  constructor(private route:ActivatedRoute,private service:VehicleService,private wish:WishlistService,private router:Router,private order:OrderService){}

  ngOnInit(){
    this.vid=this.route.snapshot.params['id'];
    console.log(this.vid);

    if(this.vid!=null){
      this.vehicle=this.service.getVehicleById(this.vid);
      console.log(this.vehicle);
    }
  }
addtowishlist(vehicle:any){
  this.wish.addtowishlist(vehicle);
  alert("added successfully");
  this.router.navigateByUrl("/user/wishlist/");
}

ordernow(){
  this.neworder={
    vehicleId:this.orderedvehicle.vehicleId,
    vehicleName:this.orderedvehicle.vehicleName,
    vehiclePrice:this.orderedvehicle.vehiclePrice,
    username:this.uname,
    address:this.uaddress,
    time:this.utime,
  }
  console.log(this.neworder);
  this.order.addtoorders(this.neworder);
  alert("order placed successfully")
  this.router.navigateByUrl('user/booking/')
}
openmodal(vehicle:any){
  this.orderedvehicle=vehicle;
}
}
