import { Injectable } from '@angular/core';
import { Shipment } from '../models/shipment.model';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {

  constructor() { }

  public _loggedIn: boolean = false;
  public shipmentList: Shipment[] = [
    {BoxColor: 'red', Destination: 'Sweden', RecieverName: 'Marcus', ShipmentId: 0, Weight: 120},
    {BoxColor: 'blue', Destination: 'Sweden', RecieverName: 'Marcus', ShipmentId: 0, Weight: 120},
    {BoxColor: 'red', Destination: 'Sweden', RecieverName: 'Marcus', ShipmentId: 0, Weight: 120},
  ];

  // get loggedIn(): boolean{
  //   return this._loggedIn
  // }
  // set loggedIn(value: boolean): boolean{
  //   this._loggedIn = value
  // }
}
