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
    }
];
