import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { BehaviorSubject, Observable } from 'rxjs';
import { Shipment, ShipmentCreate } from '../models/shipment.model';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {
  constructor(
    private readonly http: HttpClient
  ) { }
  public _loggedIn: boolean = false;
  private _shipments = new BehaviorSubject< Shipment[]>([]);


  public init(): void{
    this.http.get<Shipment[]>("https://boxinatorboxboysapi.azurewebsites.net/api/v1/shipments")
    .subscribe((shipments) => {
      this._shipments.next(shipments);
    })
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
}
