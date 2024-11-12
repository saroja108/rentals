import { Component, ViewChild, viewChild } from '@angular/core';
import { Router } from '@angular/router';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrl: './userdashboard.component.css'
})
export class UserdashboardComponent {

  constructor(private myrouter:Router,private wish:WishlistService){}
  @ViewChild ('myTag')
  myTag:any;
  isselected=false;
  user:any;
  len:any;
  togglebar(){
  if(this.myTag.nativeElement.id){
    this.isselected=!this.isselected;
  }
  }
  // ngDoCheck(){
  //   this.len=this.wish.getLengthofwishlist();
  // }

}
