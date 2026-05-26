let perfil = {
    nombre: "brayna",
    edad: 20,
    ciudad: "pereira",
    habilidades: ["sql", "python", "django"],
    buscartrabajo: true
}

console.log(`hola soy, ${perfil.nombre} tengo ${perfil.edad} años vivo en la ciudad de ${perfil.ciudad}. 
    tengo havilidad en ${perfil.habilidades.join(", ")} y busco trabajo ${perfil.buscartrabajo}`)