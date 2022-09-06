import { map, Observable, of, switchMap } from "rxjs";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "src/app/models/user.model";


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
                    return this.createUser(username);
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
    private createUser(username: string): Observable<User> {
        const user = {
            username,
            shipments: []
        };
        // Header / API Key
        const headers = new HttpHeaders({
            "Content-Type": "application/json",
            "x-api-key": API_KEY
        });
        // POST - Creates user on the server
        return this.http.post<User>(apiUsers, user, {
            headers
        })
    }


}