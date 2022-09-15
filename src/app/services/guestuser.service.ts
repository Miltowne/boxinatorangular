import { Injectable } from '@angular/core';
import axios from 'axios';
import { GuestUser } from '../models/guestuser.model';

@Injectable({
  providedIn: 'root'
})
export class GuestuserService {

  constructor() { }

  public CreateGuestUser(guestUser: GuestUser){
    axios.post("https://boxinatorboxboysapi.azurewebsites.net/api/v1/guestuser", guestUser)
    .then((response) => 
      console.log(response.data)
    )
  }
}
