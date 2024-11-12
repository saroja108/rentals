import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  
  constructor() { }
  wishlist:any;
  getVehicles(){
    return of(this.wishlist);
  }
  addtowishlist(newVehicle:any){
    this.wishlist.push(newVehicle);
  }
  getLengthofwishlist(){
    return this.wishlist.length;
  }
}
