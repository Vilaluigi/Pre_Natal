import { Routes } from "@angular/router";
import { WelcomePreNatal } from "./features/welcome/welcome-pre-natal/welcome-pre-natal";


export const routes: Routes = [
    {
        path: '',
        redirectTo:"welcome",
        pathMatch:'full'
    },
    {
        path:'welcome',
        component: WelcomePreNatal
    },
    {
        path:'infoStudent',
        loadComponent:()=> import("./features/welcome/info-student-pre-natal/info-student-pre-natal").then(m =>m.InfoStudentPreNatal)
    },
    {
        path:"home",
        loadComponent:()=>import("./features/home/home-pre-natal/home-pre-natal").then(m=>m.HomePreNatal)
    }
];
