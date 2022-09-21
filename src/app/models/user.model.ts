

export interface User {
    userId:number,
    firstName:string,
    lastName:string,
    email:string,
    password:string,
    country:string,
    postalCode:number,
    phoneNumber:number,
    dateOfBirth:Date,
    accountType:number,
    shipments:[]
}

export interface UserRegister{
    firstName:string,
    lastName:string,
    email:string,
    password:string,
    confirmPassword: string,
    country:string,
    postalCode:number,
    phoneNumber:number,
}
