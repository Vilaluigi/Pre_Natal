


export const HemogramaPacientes = [
    {
        idPaciente: 1,
        eritrograma: [
             {
                nomeCampos:"Hemacias",
                resultado: 4.03,
                unidade: "milhões/mm3",
                referencia: {
                    min: 4.0,
                    max: 5.4
                }
            },
             {
                nomeCampos:"hemoglobina",
                resultado: 12.7,
                unidade: "g/dL",
                referencia: {
                    min: 12.0,
                    max: 15.8
                }
            },
             {
                nomeCampos:"hematocrito",
                resultado: 37.1,
                unidade: "%",
                referencia: {
                    min: 33.0,
                    max: 47.8
                }
            },
             {
                nomeCampos:"VCM",
                resultado: 92.1,
                unidade: "fL",
                "referencia": {
                    min: 80.0,
                    max: 98.0
                }
            },
             {
                nomeCampos:"HCM",
                resultado: 31.5,
                unidade: "pg",
                referencia: {
                    min: 26.2,
                    max: 32.6
                }
            },
             {
                nomeCampos:"CHCM",
                resultado: 34.2,
                unidade: "g/dL",
                referencia: {
                    min: 30.0,
                    max: 36.5
                }
            },
             {
                nomeCampos:"RDW",
                resultado: 12.6,
                unidade: "%",
                referencia: {
                    min: 11.0,
                    max: 16.0
                }
            }
        ],
        leucograma: [
             {
                nomeCampos:"LEUCOCITOS",
                resultado_percentual: 100,
                resultado_absoluto: 11700,
                unidade_absoluta: "/mm3",
                referencia_absoluta: {
                    min: 3600,
                    max: 11000
                }
            },
             {
                nomeCampos:"BASTONETES",
                percentual: 0,
                absoluto: 0,
                referencia_percentual: {
                    min: 0,
                    max: 5
                },
                referencia_absoluta: {
                    min: 0,
                    max: 550
                }
            },
             {
                nomeCampos:"SEGMENTADOS",
                percentual: 71,
                absoluto: 8307,
                referencia_percentual: {
                    min: 40,
                    max: 70
                },
                referencia_absoluta: {
                    min: 1480,
                    max: 7700
                }
            },
             {
                nomeCampos:"EOSINOFILOS",
                percentual: 1,
                absoluto: 117,
                referencia_percentual: {
                    min: 0,
                    max: 7
                },
                referencia_absoluta: {
                    min: 0,
                    max: 550
                }
            },
             {
                nomeCampos:"BASOFILOS",
                percentual: 0,
                absoluto: 0,
                referencia_percentual: {
                    min: 0,
                    max: 2
                },
                referencia_absoluta: {
                    min: 0,
                    max: 220
                }
            },
             {
                nomeCampos:"LINFOCITOS",
                percentual: 23,
                absoluto: 2691,
                referencia_percentual: {
                    min: 20,
                    max: 50
                },
                referencia_absoluta: {
                    min: 740,
                    max: 5500
                }
            },
             {
                nomeCampos:"MONOCITOS",
                percentual: 5,
                absoluto: 585,
                referencia_percentual: {
                    min: 3,
                    max: 14
                },
                referencia_absoluta: {
                    min: 37,
                    max: 1500
                }
            },
            
        ],
        serie_plaquetaria: [
             {
                nomeCampos:"PLAQUETAS",
                resultado: 171,
                unidade: "x10^3/mm3",
                referencia: {
                    min: 130,
                    max: 450,
                    unidade: "x10³/mm3"
                }
            },
             {
                nomeCampos:"VMP",
                resultado: 11.5,
                unidade: "fL",
                referencia: {
                    min: 6.8,
                    max: 12.6
                }
            }
        ]
    }

]