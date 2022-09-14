import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Shipment } from '../models/shipment.model';
@Injectable({
  providedIn: 'root'
})
export class ShipmentService {
  constructor(
    private readonly http: HttpClient
  ) { }
  public _loggedIn: boolean = false;
  
  // get loggedIn(): boolean{
  //   return this._loggedIn
  // }
  // set loggedIn(value: boolean): boolean{
  //   this._loggedIn = value
  // }
  private _shipments: Shipment[] = [];

  get shipments(): Shipment[]{
  return this._shipments
}

public GetAllUserShipments(){
  this.http.get<Shipment[]>("https://boxinatorboxboysapi.azurewebsites.net/api/v1/shipments")
  .subscribe({
    next: (shipmentList: Shipment[]) => {
      shipmentList.forEach(element => {
        console.log(element)
        if(!this._shipments.includes(element)){

          this._shipments.push(element)
        }
      });
    }
  })
}
  // public GetAllShipments(){
  //   axios.get("https://boxinatorboxboysapi.azurewebsites.net/api/v1/shipments")
  //   .then((response)=> this._shipments = response.data)
    
  // }
}
