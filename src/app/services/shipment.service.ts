import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {

  constructor() { }

  public _loggedIn: boolean = false;

  // get loggedIn(): boolean{
  //   return this._loggedIn
  // }
  // set loggedIn(value: boolean): boolean{
  //   this._loggedIn = value
  // }
}
