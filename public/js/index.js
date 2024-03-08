
let main= document.querySelector('main')
console.log(main);

let h2 = document.querySelector('h2')
console.log(h2);

let enlaceListadoPeliculas = document.querySelector('a')
console.log(enlaceListadoPeliculas);

let parrafos = document.querySelector('p')
console.log(parrafos);

let nombre = prompt("Ingrese su nombre");
console.log(nombre);

if(!nombre){
    h2.innerText +='invitado';
}else{
    h2.innerText +=nombre;
}