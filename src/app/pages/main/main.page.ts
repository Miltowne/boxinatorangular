import { Component } from '@angular/core';
import { ShipmentService } from 'src/app/services/shipment.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.css']
})
export class MainPage {
  public loggedIn: boolean = false;
  // @Select() app$: any | undefined;

  constructor(
    private readonly shipmentService: ShipmentService,
    // private store: Store
  ) 
  { 
  }

  // clickHandler(username: any | undefined){
  //   this.store.dispatch([
  //     new SetUsername(username),
  //     new Navigate('/profile')
  //   ])
  // }


  public makeLoggedIn(){
    /* if(this.loggedIn){
      this.loggedIn = false
    console.log("making it false")

    }
    else{
      this.loggedIn = true
    console.log("making it true")

    } */
  }
  
  
  
  ngOnInit(): void {
    if (sessionStorage.getItem("mysterybox-user") === null)
        {
          this.loggedIn = false
        }
        else
        {
          this.loggedIn = true
        }
  }
  

}
