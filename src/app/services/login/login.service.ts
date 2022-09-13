import { map, Observable, of, switchMap } from "rxjs";
import { environment } from "src/environments/environment";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "src/app/models/user.model";
import { DateTimePickerComponent } from "@progress/kendo-angular-dateinputs";
import axios from "axios";


// Variable for getting the Key and Url from the environment file
const { apiUsers, API_KEY } = environment;

@Injectable({
    providedIn: 'root'
})

export class LoginService {

    // Dependency Injection
    constructor(private readonly http: HttpClient) { }
    // Login function that checks if the user already exists
    public login(username: string): Observable<User> 
    {
        return this.checkUsername(username)
        .pipe(
            switchMap((user: User | undefined) => {
                // If user is undefined a user will be created with the given name
                if (user === undefined) {
                    return this.createUser();
                }
                return of(user);
            })
        )
    }

    // Checks if user exists
    public checkUsername(username: string): Observable<User | undefined> {
        return this.http.get<User[]>(`${apiUsers}?username=${username}`)
        .pipe(
            map((response: User[]) => response.pop())
        )
    }

    // Checks if the user exists
    public createUser(): Observable<User> {
        const user = { FirstName: "adam",
        LastName: "Larsson",
        Email: "pelle@larsson.com",
        Password: "abcde123",
        Country: "SV",
        PostalCode: 12345,
        PhoneNumber: 701234567,
        DataOfBirth: Date.now(),
        AccountType: 1 }
        // Header / API Key
        const headers = new HttpHeaders({
            "Content-Type": "application/json"
        });
        // POST - Creates user on the server
        return this.http.post<User>(apiUsers, user, {
            // headers
        })
        // .subscribe({
        //     error: (error: HttpErrorResponse) => { // this._error can be displayed via the get methods in other components
        //       this._error = error.message; // ... to read the error 
        //     }
        //   })
    }
    public createUserAxios(FirstName: string, LastName: string, email: string, password: string, country: string, postalcode: number, phonenumber: number ){
        const user = { FirstName: FirstName,
        LastName: LastName,
        Email: email,
        Password: password,
        Country: country,
        PostalCode: postalcode,
        PhoneNumber: phonenumber,
        DataOfBirth: Date.now(),
        AccountType: 1 
    }


axios.post(apiUsers,user).then((response) => console.log(response))
    }


}