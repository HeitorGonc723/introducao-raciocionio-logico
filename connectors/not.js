// Exemplo do conector NOT (!)

const { use } = require("react")

// Este conector INVERTE o valor lógico da condição.
// Se a condição é verdadeira, o '!' a torna falsa, e vice-versa.

//Eu posso dirigir caso:
//Possuir habilitação
//Ser Brasileiro

//-------------Contexto de atribuição---------//
let idade = 18
let possuiCNH = true
let nacionalidade = "Brasileiro"
let minhaValidacao = idade >= 18 && possuiCNH == true && nacionalidade == "Brasileiro"
// console.log("Valor real da minha validação: ",minhaValidacao)
// console.log("Valor negado(!) da minhã validação: ", !minhaValidacao)
// console.log("Valor negado(!)x2 da minha validação", !minhaValidacao)
let possuiInformacao = possuiCNH ? "Possui CNH" : nacionalidade === "Brasileiro" ?
 "Nacionalidade" : "Outros"
console.log(possuiInformacao)

//Imagine o contexto de pegar as informações do usuário do banco de dados
//através de um endpoint na api /users/22
let respostaDaApi = null //nao existe o codigo 22
let users = respostaDaApi ?? "Dados do Usuário {}"
console.log("users",users)



if(possuiInformacao){
    console.log("Possui Informação")
}else{
    console.log("Não possui informação")
}

//------------Contexto de validação-----------//
//-----------------------------------