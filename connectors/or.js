/// Exemplo do conector OR (||)

// Este conector retorna 'true' se PELO MENOS UMA das condições forem verdadeiras.


//eu posso votae caso:
//eu seja homem ou mulher
//tenha mais de 16 anos
//tenha titulo de eleitor

//-------------Contexto de atribuição---------//
let sexo = "H" // ou M
let idade = 17
let possuiTituloEleitor = true
//------------Contexto de validação-----------//
//----true-----------------true--------------//
if((sexo == "H" || sexo =="M") && idade >= 16 && possuiTituloEleitor == true){
    console.log("Voce pode votar")
}else{
    console.log("Voce nao pode votar")
}