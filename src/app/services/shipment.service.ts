import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Shipment, ShipmentCreate } from '../models/shipment.model';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {
  constructor(
    private readonly http: HttpClient
  ) { }
  public _loggedIn: boolean = false;
  private _shipments: Shipment[] = [];

  get shipments(): Shipment[]{
    return this._shipments
  }

  public CreateNewShipment(shipment: ShipmentCreate){
    axios.post("https://boxinatorboxboysapi.azurewebsites.net/api/v1/shipments", shipment)
    .then((response) => 
      console.log(response.data)
    )
  }
}
