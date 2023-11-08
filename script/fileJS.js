/*const aggiungiAttivita = (invio) => {
    invio.preventDefault()
    const messaggio = document.createElement("li")
    const taskInserita = document.getElementById("attivita").Value
    if(taskInserita === ''){
        alert("Inserisci un'attivita' valida!!")
    }else{
        //const elimina = document.createElement("button")
        messaggio.setAttribute("class" , "speciale")
        //elimina.setAttribute("class" , "fa fa-trash", "id","delete-btn")
        messaggio.innerText = document.getElementById("attivita").value
        document.getElementById("listaNonOrdinata").appendChild(messaggio)
        document.body.appendChild(elimina)
        document.getElementById("taskInserita").value = ""
        
    }
}
const pulsante = document.getElementById("submit-btn")
pulsante.addEventListener("click",aggiungiAttivita) */
const lista = document.getElementById("btn")
function aggiungi(){
    const attivita = document.createElement("li")
    const valoreMessaggio = document.getElementById("attivita").value
    var x = document.createTextNode(valoreMessaggio);
    attivita.appendChild(x);
    if(valoreMessaggio === ""){
        alert("inserisci un'attivita' valida")
    } else {
        document.getElementById("listaNonOrdinata").appendChild(attivita)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        attivita.appendChild(span)

    }
    document.getElementById("attivita").value = ""
}
lista.addEventListener("click",function(e){
    if(e.target.tagName === "li"){
        e.target.classList.toggle("checked")
    } else if(e.target.tagName === "span"){
        e.target.parentElement.remove()
    }
}, false)
function check(e) {
}
