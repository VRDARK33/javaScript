// formas de selecionar DOMS en javascripts son dos por id o por selector CSS
// DOM = document object model


// por id
document.getElementById("prueba_dom");

document.querySelector("#prueba_dom")
document.querySelector(".hero-saludo")
document.querySelector("h1")

console.log(document.getElementById("prueba_dom"))
console.log(document.querySelector("h1"))
console.log(document.querySelector(".hero-saludo"))
console.log(document.querySelector("#prueba_dom"))

let titulo = document.querySelector("h1")

titulo.textContent = "brayan sanchez"
titulo.style.color = "red"

/*
evento en javascript

addEventListener recibe dos cosas:

El nombre del evento "click"
Una función que se ejecuta cuando ocurre ese evento

*/

titulo.addEventListener("click", () => {
    titulo.textContent = "me hiciste click";
});

let parrafo = document.querySelector(".hero-saludo")

parrafo.addEventListener("click", () =>{
    parrafo.textContent = "le diste click otra vez";
});

parrafo.addEventListener("mouseenter", () => {
    parrafo.style.color = "blue";
});

parrafo.addEventListener("mouseleave", () => {
    parrafo.style.color = "";
});

// crear y agregar elementos desde javascripts

//crear elemento
let nuevobotton = document.createElement("button");

//darle contenido
nuevobotton.textContent = "soy un boton"

//darle evento 
nuevobotton.addEventListener("click", () => {
    nuevobotton.textContent = "boton clicleado";
});

//agregarlo a la pagina dentro de un elemento existente
document.querySelector("#prueba_dom").appendChild(nuevobotton);

let input = document.querySelector("input");
console.log(input.value)