import { Injectable } from "@angular/core";
import axios from "axios";
import { StorageKeys } from "src/app/enums/storage-keys.enum";
import { User } from "src/app/models/user.model";
import { StorageUtil } from "src/app/utils/storage.util";


@Injectable({
    providedIn: 'root'
})

export class UserService {

    // Keeps track of the User
    private _user?: User;

    get user(): User | undefined {
        return this._user;
    }

    set user(user: User | undefined) {
        StorageUtil.storageSave<User>(StorageKeys.User, user!);
        this._user = user;
    }

    constructor() {
        this._user = StorageUtil.storageRead<User>(StorageKeys.User);
    }

    public GetAllUsers(){
        axios.get("https://boxinatorboxboysapi.azurewebsites.net/api/v1/users").then((data) => console.log(data.data))
    }
    

}