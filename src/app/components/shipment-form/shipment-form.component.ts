import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shipment-form',
  templateUrl: './shipment-form.component.html',
  styleUrls: ['./shipment-form.component.css']
})
export class ShipmentFormComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
  }

  

  public shipmentSubmit(shipmentForm: NgForm): void{
    console.log(shipmentForm);
  }

}
