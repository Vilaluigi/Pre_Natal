import { Injectable } from '@angular/core';
import { dadosSession } from './user-session.model';

@Injectable({
    providedIn:"root"
})
export class UserSession {
    constructor(){}
    dadoSessao:dadosSession = {
        logado:true,
        respCondultas:'',
        dadosTrimestre:{nomePaciente:'',numeroTrimestre:0}
    }
    gerarSessao(){
        sessionStorage.setItem("usuario-logado",JSON.stringify(this.dadoSessao))
    }
    deletaSessao(){
        sessionStorage.removeItem("usuario-logado")
    }

}
