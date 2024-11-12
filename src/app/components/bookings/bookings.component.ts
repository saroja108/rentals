import { Component } from '@angular/core';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent {

  orders:any;
  constructor(private order:OrderService){}

  ngOnInit(){
    this.order.getOrders().subscribe((res)=>{
      this.order=res;
      console.log(this.order)
    })
  }
}
