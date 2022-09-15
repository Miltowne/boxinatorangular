import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Shipment } from '../models/shipment.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {


// get shipments(): Shipment[]{
//   return this._shipments
// }

  constructor(
    private readonly http: HttpClient
  ) { }

 

  
}
