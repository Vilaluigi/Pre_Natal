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
    },
    {
      path:"homeHemograma",
      loadComponent:()=> import('./features/home/home-hemograma-pre-natal/home-hemograma-pre-natal').then(m=>m.HomeHemogramaPreNatal)  
    },
    {
        path:"analiseEritrograma",
        loadComponent:()=> import('./features/analiseInd/analise-individual-eritrograma-pre-natal/analise-individual-eritrograma-pre-natal').then(m=>m.AnaliseIndividualEritrogramaPreNatal)
    },
    {
        path:"analiseLeucograma",
        loadComponent:()=> import('./features/analiseInd/analise-individual-leucograma-pre-natal/analise-individual-leucograma-pre-natal').then(m=>m.AnaliseIndividualLeucogramaPreNatal),
    }
];
