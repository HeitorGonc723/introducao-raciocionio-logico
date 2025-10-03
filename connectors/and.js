// Exemplo do conector AND (&&)

// Este conector retorna 'true' apenas se TODAS as condições forem verdadeiras.


//-------------Contexto de atribuição---------//
//Se eu tenho 18 anos e tenho CNH eu posso dirigir.
let idade = 18
let possuoCNH = true
let nacionalidade = "Brasileira"

//------------Contexto de validação-----------//
//----true-----------------true--------------//
if (idade >= 18 && possuoCNH == true && nacionalidade == "Brasileira"){
    console.log("EU POSSO DIRIGI")
}else{
    console.log("EU NÃO POSSO DIRIGIR")
}
//----------------  -------------------//


