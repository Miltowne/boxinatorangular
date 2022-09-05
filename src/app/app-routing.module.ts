import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginPage } from "./pages/login/login.page";
import { MainPage } from "./pages/main/main.page";


const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "/login"
    },
    {
        path: "login",
        component: LoginPage
    },
    {
        path: "main",
        component: MainPage
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}