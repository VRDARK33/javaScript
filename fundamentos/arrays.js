//metodo foreach version moderna del clasico for

let habilidades = ["django","python","css","html","sql"]

console.log(`primera habilidad ${habilidades[0]} y ultima habilidad ${habilidades[4]}`)

habilidades.push("javaScript")

console.log(habilidades.length)

let resultado = habilidades
    .filter(n => n.length > 3)
    .map(n => n.toUpperCase())
console.log(resultado)

// otros metodso para recorrer arrys filter, map, find 

// filter -> filtrar un arrys segun una condicion devulve un nuevo arry

let numeros = [1,2,3,4,5,6,7,8,9,10]
let pares = numeros.filter(n => n % 2 === 0)
console.log(pares)

//map -> transforma cada elemnto y devuelve un nuevo arry
let nombre = ["brayan", "camilo", "daniel"]
let mayusculas = nombre.map(nombre => nombre.toUpperCase())
console.log(mayusculas)

// find -> devuelve el primer elemento que cumple una condicion

let edades = [12,22,18,50]
let mayor = edades.find(edad => edad >= 18)
console.log(mayor) 