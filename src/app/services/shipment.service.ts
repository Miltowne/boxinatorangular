import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Shipment } from '../models/shipment.model';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {

  constructor(
    private readonly http: HttpClient
  ) { }

  public _loggedIn: boolean = false;
  public shipmentList: Shipment[] = [
    {BoxColor: 'red', Destination: 'Sweden', RecieverName: 'Marcus', ShipmentId: 0, Weight: 120},
    {BoxColor: 'blue', Destination: 'Sweden', RecieverName: 'Marcus', ShipmentId: 0, Weight: 120},
    {BoxColor: 'red', Destination: 'Sweden', RecieverName: 'Marcus', ShipmentId: 0, Weight: 120},
  ];

  public findAllShipments(){

    this.http.get<any>("https://boxinatorboxboysapi.azurewebsites.net/api/v1/users")
    .subscribe({
      next: (shipmentlist: Shipment[]) => {
        
        shipmentlist.forEach(element => {
          console.log(element)
        });
      }
    })
  }
}
