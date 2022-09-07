import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Shipment } from '../models/shipment.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

private _shipments: Shipment[] = [];

get shipments(): Shipment[]{
  return this._shipments
}

  constructor(
    private readonly http: HttpClient
  ) { }

  public GetAllUserShipments(){
    this.http.get<Shipment[]>("https://boxinatorboxboysapi.azurewebsites.net/api/v1/shipments")
    .subscribe({
      next: (shipmentList: Shipment[]) => {
        this._shipments = shipmentList
        shipmentList.forEach(element => {
          console.log(element)
        });
      }
    })
  }
}
