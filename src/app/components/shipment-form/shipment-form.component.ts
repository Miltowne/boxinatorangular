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

  ngOnInit(): void {
  }

  

  public shipmentSubmit(shipmentForm: NgForm): void{
    console.log(shipmentForm);
  }

}