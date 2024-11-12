import { Injectable } from '@angular/core';
import { vehicle } from './vehicle';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  vehicles:vehicle[]=[
   
        // Cars
        {
          vehicleId: 1,
          vehicleName: "Swift",
          vehicleCompany: "Maruti Suzuki",
          vehiclePrice: 600000,
          availableTime: "9:00 AM - 6:00 PM",
          fuelType: "Petrol",
          seatingCapacity: 5,
          vehicleType: "Cars",
          vehicleImage: "https://imgd.aeplcdn.com/1056x594/n/369uusa_1483116.jpg?q=80",
          rating: 4.5
        },
        {
          vehicleId: 2,
          vehicleName: "City",
          vehicleCompany: "Honda",
          vehiclePrice: 1000000,
          availableTime: "8:00 AM - 5:00 PM",
          fuelType: "Diesel",
          seatingCapacity: 5,
          vehicleType: "Cars",
          vehicleImage: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202011/Honda_City_hatchback_exterior_1200x768.jpeg?size=690:388",
          rating: 4.7
        },
        {
          vehicleId: 3,
          vehicleName: "Creta",
          vehicleCompany: "Hyundai",
          vehiclePrice: 1200000,
          availableTime: "7:00 AM - 7:00 PM",
          fuelType: "Petrol",
          seatingCapacity: 7,
          vehicleType: "Cars",
          vehicleImage: "https://hyundaitayninh-oto.com/wp-content/uploads/2022/03/0006_hyundai-creta-2022.jpg",
          rating: 4.6
        },
        {
          vehicleId: 4,
          vehicleName: "Fortuner",
          vehicleCompany: "Toyota",
          vehiclePrice: 3000000,
          availableTime: "9:00 AM - 8:00 PM",
          fuelType: "Diesel",
          seatingCapacity: 7,
          vehicleType: "Cars",
          vehicleImage: "https://imgcdn.oto.com.sg/large/gallery/color/1/14/toyota-fortuner-color-759224.jpg",
          rating: 4.8
        },
        {
          vehicleId: 5,
          vehicleName: "Kwid",
          vehicleCompany: "Renault",
          vehiclePrice: 500000,
          availableTime: "8:00 AM - 6:00 PM",
          fuelType: "Petrol",
          seatingCapacity: 5,
          vehicleType: "Cars",
          vehicleImage: "https://brfrance.com.br/uploads/products/versions/colors/kwid-2022-intense-02.png",
          rating: 4.3
        },
        {
          vehicleId: 6,
          vehicleName: "Thar",
          vehicleCompany: "Mahindra",
          vehiclePrice: 1500000,
          availableTime: "10:00 AM - 5:00 PM",
          fuelType: "Diesel",
          seatingCapacity: 5,
          vehicleType: "Cars",
          vehicleImage: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/1/versions/mahindra-thar-roxx-mx1-petrol-mt-2wd1724144390186.jpg?q=80",
          rating: 4.9
        },
      
        // Bikes
        {
          vehicleId: 7,
          vehicleName: "Splendor Plus",
          vehicleCompany: "Hero",
          vehiclePrice: 70000,
          availableTime: "7:00 AM - 9:00 PM",
          fuelType: "Petrol",
          seatingCapacity: 2,
          vehicleType: "Bike",
          vehicleImage: "https://images.jdmagicbox.com/quickquotes/images_main/hero-splendor-plus-xtec-bs6-petrol-tornado-grey-271805940-yzrff.png",
          rating: 4.2
        },
        {
          vehicleId: 8,
          vehicleName: "Pulsar 150",
          vehicleCompany: "Bajaj",
          vehiclePrice: 90000,
          availableTime: "6:00 AM - 10:00 PM",
          fuelType: "Petrol",
          seatingCapacity: 2,
          vehicleType: "Bike",
          vehicleImage: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/185667/pulsar-150-right-side-view-9.jpeg?isig=0",
          rating: 4.5
        },
        { 
          vehicleId: 9,
          vehicleName: "FZ S V3",
          vehicleCompany: "Yamaha",
          vehiclePrice: 110000,
          availableTime: "8:00 AM - 8:00 PM",
          fuelType: "Petrol",
          seatingCapacity: 2,
          vehicleType: "Bike",
          vehicleImage: "https://5.imimg.com/data5/SELLER/Default/2021/12/CU/VG/QI/142037608/yamaha-fz-150-bike.jpg",
          rating: 4.6
        },
        {
          vehicleId: 10,
          vehicleName: "Duke 250",
          vehicleCompany: "KTM",
          vehiclePrice: 200000,
          availableTime: "9:00 AM - 6:00 PM",
          fuelType: "Petrol",
          seatingCapacity: 2,
          vehicleType: "Bike",
          vehicleImage: "https://motoandbiketv.gr/wp-content/uploads/2021/09/ktm-duke-250-doro-kranos.jpg",
          rating: 4.7
        },
        {
          vehicleId: 11,
          vehicleName: "Bullet 350",
          vehicleCompany: "Royal Enfield",
          vehiclePrice: 160000,
          availableTime: "10:00 AM - 7:00 PM",
          fuelType: "Petrol",
          seatingCapacity: 2,
          vehicleType: "Bike",
          vehicleImage: "https://www.royalenfield.com/content/dam/royal-enfield/classic-350/colors/studio-shots/dual-channel/dark-stealth-black/new/01-dark-stealth-black.jpg",
          rating: 4.8
        },
        {
          vehicleId: 12,
          vehicleName: "Apache RTR 160",
          vehicleCompany: "TVS",
          vehiclePrice: 95000,
          availableTime: "8:00 AM - 6:00 PM",
          fuelType: "Petrol",
          seatingCapacity: 2,
          vehicleType: "Bike",
          vehicleImage: "https://images.drivespark.com/webp/fit-in/450x400/bikes-photos/modelsoverview/76/tvs-apache-rtr-160-review-mileage.jpg",
          rating: 4.4
        }
  ];
  constructor() { }

  getAllVehicles(){
    return of(this.vehicles);
  }
  addvehicle(newVehicle:any){
    this.vehicles.push(newVehicle);
    return
  }

  getVehicleById(id:any){
    return this.vehicles.find(vehicle =>vehicle.vehicleId==id);
  }

  deleteVehicle(id:any){
    let index=this.vehicles.findIndex(vehicle =>vehicle.vehicleId==id);
    this.vehicles.splice(index,1);
    return"deleted";
  }
  updateVehicle(id:any,newVehicle:any){
    let index=this.vehicles.findIndex(vehicle =>vehicle.vehicleId==id);
    this.vehicles.splice(index,1,newVehicle);
    return "updated";
  }
  getBikes(){
    return of(this.vehicles.filter(vehicle =>vehicle.vehicleType="Bike"));
  }
  getCars(){
    return of(this.vehicles.filter(vehicle =>vehicle.vehicleType="Cars"));
  }
}
