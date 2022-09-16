import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { BehaviorSubject, Observable } from 'rxjs';
import { Shipment, ShipmentCreate, ShipmentCreateGuest } from '../models/shipment.model';
import { UserService } from './user/user.service';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {
  constructor(
    private readonly http: HttpClient,
    private readonly userService: UserService
  ) { }
  public _loggedIn: boolean = false;
  private _shipments = new BehaviorSubject< Shipment[]>([]);

  public init(): void{
    if(this.userService.user != null){
      const userId = this.userService.user!.userId
      this.http.get<Shipment[]>(`https://boxinatorboxboysapi.azurewebsites.net/api/v1/shipments/user/${userId}`)
      .subscribe((shipments) => {
        this._shipments.next(shipments);
      })
    }
    else{
      alert("no user logged in, therefore no shipments for you")
    }
}

  public GetAllUserShipments(): Observable<Shipment[]>{
    return this._shipments
    }

  public CreateNewShipment(shipment: ShipmentCreate){
    axios.post("https://boxinatorboxboysapi.azurewebsites.net/api/v1/shipments", shipment)
    .then((response) => 
      console.log(response.data)
    )
  }

  public CreateNewGuestUserShipment(shipment: ShipmentCreateGuest){
    axios.post("https://boxinatorboxboysapi.azurewebsites.net/api/v1/shipments/guestuser", shipment)
    .then((response) => 
      console.log(response.data)
    )
  }
}
