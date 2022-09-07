import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShipmentService } from 'src/app/services/shipment.service';

@Component({
  selector: 'app-shipment-form',
  templateUrl: './shipment-form.component.html',
  styleUrls: ['./shipment-form.component.css']
})
export class ShipmentFormComponent implements OnInit {

  constructor(
    private readonly shipmentService: ShipmentService
  ) { }
  public loggedIn: boolean = this.shipmentService._loggedIn;
  ngOnInit(): void {
  }

  

  public shipmentSubmit(shipmentForm: NgForm): void{
    const {RecieverName} = shipmentForm.value
    const {Weight} = shipmentForm.value
    const {Destination} = shipmentForm.value
    const {BoxColor} = shipmentForm.value


    // ShipmentId: number;
    // RecieverName: string;
    // Weight: number;
    // Destination: string;
    // BoxColor: string;

    




    console.log(shipmentForm);
  }

}
