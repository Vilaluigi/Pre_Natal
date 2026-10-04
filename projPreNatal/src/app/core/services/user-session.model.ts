export interface dadosSession{
    logado:boolean,
    respCondultas:string,
    dadosTrimestre:ITrimestre
}

export interface ITrimestre {
    nomePaciente:string,
    numeroTrimestre:number | string
}