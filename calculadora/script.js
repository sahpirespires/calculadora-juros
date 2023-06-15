function jurosSimples(event) {
    event.preventDefault()
    //formdata tras todos os dados do form //
    var dados = new FormData(this) 
    var capital = dados.get("capital")
    var taxa = dados.get("taxa")
    var tempo = dados.get("tempo")
    // parse float transforma string em numero//
    var taxa = parseFloat(taxa) /100
    var soma = parseFloat(capital) * parseFloat(taxa) * parseFloat(tempo) 
    var Jsimples = soma + parseFloat(capital)

    if(Jsimples) {
        texto.innerHTML = "O valor total é: " + Jsimples.toFixed(2)
    } 

} 



function jurosComposto(event) {
    event.preventDefault()


    var dado = new FormData(this) 
    var capital2 = dado.get("capital2")
    var peso2 = dado.get("peso2")
    var peso3 = dado.get("peso3")

    var taxa2 = parseFloat(peso2) /100
    var capital2 = parseFloat(capital2)
    var tempo =  parseFloat(peso3)
    var Jcomposto = capital2 *(1+taxa2)**tempo

if (Jcomposto) {
    texto2.innerHTML = "O valor total é: " + Jcomposto.toFixed(2)
}
}

var composto = document.getElementById("formdois")
var simples  = document.getElementById("formulario")
composto.addEventListener("submit", jurosComposto)

sim.addEventListener('click', () => {
composto.style.display = 'none'
simples.style.display = 'grid'
})

com.addEventListener('click', () => {
composto.style.display = 'flex'
simples.style.display = 'none'
})    
formulario.addEventListener("submit", jurosSimples)
