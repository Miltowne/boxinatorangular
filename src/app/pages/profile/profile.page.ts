import { Component, OnInit } from '@angular/core';
import { Shipment } from 'src/app/models/shipment.model';
import { ShipmentService } from 'src/app/services/shipment.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.css']
})
export class ProfilePage implements OnInit {
  
  constructor(
    private readonly shipmentService: ShipmentService
  ) { }

  ngOnInit(): void {
    let list = this.shipmentService.shipmentList
  }

}

