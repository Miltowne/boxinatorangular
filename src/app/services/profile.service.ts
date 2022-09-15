import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Shipment } from '../models/shipment.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

private _shipments = new BehaviorSubject< Shipment[]>([]);

// get shipments(): Shipment[]{
//   return this._shipments
// }

  constructor(
    private readonly http: HttpClient
  ) { }

  public init(): void{
    this.http.get<Shipment[]>("https://boxinatorboxboysapi.azurewebsites.net/api/v1/shipments")
    .subscribe((shipments) => {
      this._shipments.next(shipments);
    })
}

  public GetAllUserShipments(): Observable<Shipment[]>{
    return this._shipments
    }

  
}
