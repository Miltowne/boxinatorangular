import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginPage } from "./pages/login/login.page";
import { MainPage } from "./pages/main/main.page";
import { ProfilePage } from "./pages/profile/profile.page";
import { RegisterPage } from "./pages/register/register.page";


const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "/main"
    },
    {
        path: "login",
        component: LoginPage
    },
    {
        path: "register",
        component: RegisterPage
        
    },
    {
        path: "main",
        component: MainPage
    },
    {
        path: "profile",
        component: ProfilePage
    }
    
]

@NgModule({
    imports: [ // Import a module
        RouterModule.forRoot(routes)
    ],
    exports: [ // Exports a module and its feature
        RouterModule
    ]
})
export class AppRoutingModule {}