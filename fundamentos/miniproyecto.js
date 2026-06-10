

let boton = document.querySelector(".btn-primary")

boton.addEventListener("click", () => {
    let input = document.querySelector("input");
    console.log(input.value);
    let lista = document.createElement("li");
    lista.textContent = input.value;
    let botoneliminar = document.createElement("button");
    botoneliminar.textContent = "eliminar";
    botoneliminar.addEventListener("click", () =>{
        lista.remove()
    });
    lista.appendChild(botoneliminar);
    document.querySelector("ul").appendChild(lista);
    input.value = ""
    
});