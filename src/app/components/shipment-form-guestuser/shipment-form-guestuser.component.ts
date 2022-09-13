import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GuestUser } from 'src/app/models/guestuser.model';
import { ShipmentCreate } from 'src/app/models/shipment.model';
import { GuestuserService } from 'src/app/services/guestuser.service';
import { ShipmentService } from 'src/app/services/shipment.service';

@Component({
  selector: 'app-shipment-form-guestuser',
  templateUrl: './shipment-form-guestuser.component.html',
  styleUrls: ['./shipment-form-guestuser.component.css']
})
export class ShipmentFormGuestuserComponent implements OnInit {
  constructor(
    private readonly shipmentService: ShipmentService,
    private readonly guestUserService: GuestuserService
  ) { }
  public loggedIn: boolean = this.shipmentService._loggedIn;
  ngOnInit(): void {
  }
  
  

  public shipmentSubmit(shipmentForm: NgForm): void{
    const {receiverName, weight, destination, boxColor, email} = shipmentForm.value
    let shipment: ShipmentCreate = {RecieverName: receiverName, Weight: weight, Destination: destination, BoxColor: boxColor, ShipmentStatus: 0}
    console.log(receiverName, weight, destination, boxColor);
    this.shipmentService.CreateNewShipment(shipment)
    let guestUser: GuestUser = {Email: email}
    this.guestUserService.CreateGuestUser(guestUser)
  }
}