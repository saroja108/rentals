import { Component } from '@angular/core';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {
  vehicle:any;
  vehicles: any;
  constructor(private wish:WishlistService){}

  ngOnInit(){
    this.wish.getVehicles().subscribe((res)=>{
      this.vehicles=res
    })
  }
}
