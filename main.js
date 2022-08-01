/*
const contenedor = document.querySelector(".flex-container");
function crearLlave(nombre, modelo, precio) {
  img = "<img class = 'llave-img' src= 'llave.png'>";
  nombre = `<h2>${nombre}<h2>`;
  modelo = `<h3>${modelo}<h3>`;
  precio = `<p>Precio: <b>$${precio}</b><p>`;

  return [img, nombre, modelo, precio];
}
const changeHidden = (number) => {
  document.querySelector(".key-data").value = number;
};
let documentFragment = document.createDocumentFragment();

for (let i = 1; i <= 20; i++) {
  let modeloRandom = Math.round(Math.random() * 10000);
  let precioRandom = Math.round(Math.random() * 10 + 30);
  let llave = crearLlave(`llave ${i}`, `modelo ${modeloRandom}`, precioRandom);
  let div = document.createElement("DIV");
  div.tabIndex = i;
  div.addEventListener("click", () => {
    changeHidden(modeloRandom);
  });
  div.classList.add(`item-${i}`, `flex-item`);
  div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
  documentFragment.appendChild(div);
}
contenedor.appendChild(documentFragment);


window{{{{{{{{{{{{{}}}}}}}}}}}}}a

hereda las propiedades de EventTarget


window.open("enlace")-------- abre una ventana
window.close("enlace")-------- cierra una ventana
window.closed()-------- indica si la ventana esta cerrada, indica con un true or false
window.stop()-------- deja de cargar la ventana
window.alert("")--------- muestra una alerta con algo escrito
window.print("")-------- es para imprimir algo
(window.prompt("")-------- pide un dato y se convierte en un valor en forma de string
window.confirm("")-------- es una alerta que puede tener un dialogo y si se da aceptar devuelve true y si el usuario da cancelar devuelve false

window.screen.-------- es para acceder a propiedades de la pantalla
window.screenLeft-------- decuelve la distancia en pixeles entre el borde izquierdo de la ventana y el borde izquierdo de la pantalla en si---- es lo mismo si ponemos el Top, Right o Bottom
window.scrollX-------- devuelve la cantidad de pixeles que han sidos desplazados por la scroll bar horizontalmente
window.scrollY-------- devuelve la cantidad de pixeles que han sidos desplazados por la scroll bar verticalmente
window.scroll(x,y)--------  scrollea la pagina con las medidas indicadas

window.location.href-------- devuelve la localizacion del archivo
window.location.hostname-------- devuelve el nombre del dominio del servidor web
window.location.pathname-------- devuelve la ruta de donde esta el archivo, es lo que viene despues del dominio
window.location.protocol-------- indica el protocolo de la pagina, https o http
window.location.asign()-------- 



segundo video probema 1        








let ancho = window.screen.availWidth;
let alto = window.screen.availHeight;
comprar = confirm(`El alto es ${alto}, el ancho es ${ancho}`);

if (comprar) {
  alert("comrpa realizada eitosamente");
} else {
  alert("no comraste una mierda");
}

let href = window.location.href;
let pathname = window.location.pathname;
let hostname = window.location.hostname;
let protocol = window.location.protocol;

let html = `Protocolo: <b>${protocol}</b><br>`;
html += `hostname: <b>${hostname}</b><br>`;
html += `pathname: <b>${pathname}</b><br>`;
html += `URL completa: <b>${href}</b><br>`;
document.write(html);


EVENTOS{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}


"click"--------ocurre con un click
"dbclick"-------- ocurre con un doble click
"mouseover"-------- ocurre cuando el puntero se mueve sobre un elemento o sobre uno de sus hijos
"mouseout"--------ocurre cuando se mueve el puntero fuera de un elemento o de sus elementos
"contextmenu"-------- ocurre con el click derecho para abrir el menu contextual
"mouseenter"-------- ocurre cuando el puntero se mueve sobre un elemento
"mouseleave"--------   ocurre cuando el puntero se mueve fuera de un elemento
"mouseup"-------- ocurre cuando un usuario suelta un oton del mouse sobre un elemnto
"mousemove"-------- ocurre cuando el puntero se mueve mientras està sobre un elemento

*/

const contenedor = document.querySelector(".contenedor");
contenedor.addEventListener("click", () => {
  contenedor.classList.toggle("activo");
});
