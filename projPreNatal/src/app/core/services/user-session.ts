import { Injectable } from '@angular/core';
import { dadosSession } from './user-session.model';

@Injectable({
    providedIn:"root"
})
export class UserSession {

    private dadoSessao:dadosSession = {
        logado:true,
        respCondultas:'',
        dadosTrimestre:{nomePaciente:'',numeroTrimestre:0}
    }
    get session(){
        return JSON.parse(sessionStorage.getItem("usuario-logado") as string)
        
    }
    set session(item:dadosSession){
        sessionStorage.setItem("usuario-logado",JSON.stringify(item))
    }
    gerarSessao(){
        this.session = this.dadoSessao
    }
    deletaSessao(){
        sessionStorage.removeItem("usuario-logado")
    }

}
