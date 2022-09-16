import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShipmentService } from 'src/app/services/shipment.service';
import { Shipment, ShipmentCreate } from 'src/app/models/shipment.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipment-form',
  templateUrl: './shipment-form.component.html',
  styleUrls: ['./shipment-form.component.css']
})
export class ShipmentFormComponent implements OnInit {

  constructor(
    private readonly shipmentService: ShipmentService,
    private readonly router: Router
  ) { }
  public loggedIn: boolean = this.shipmentService._loggedIn;
  ngOnInit(): void {
  }
  
  

  public shipmentSubmit(shipmentForm: NgForm): void{
    const {receiverName, weight, destination, boxColor} = shipmentForm.value
    let shipment: ShipmentCreate = {RecieverName: receiverName, Weight: weight, Destination: destination, BoxColor: boxColor, ShipmentStatus: 0}
    console.log(receiverName, weight, destination, boxColor);
    this.shipmentService.CreateNewShipment(shipment)
    this.router.navigateByUrl("/profile")
  }
}
