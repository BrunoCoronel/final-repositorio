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

EVENTOS DEL MOUSE

"click"--------ocurre con un click
"dbclick"-------- ocurre con un doble click
"mouseover"-------- ocurre cuando el puntero se mueve sobre un elemento o sobre uno de sus hijos
"mouseout"--------ocurre cuando se mueve el puntero fuera de un elemento o de sus elementos
"contextmenu"-------- ocurre con el click derecho para abrir el menu contextual
"mouseenter"-------- ocurre cuando el puntero se mueve sobre un elemento
"mouseleave"--------   ocurre cuando el puntero se mueve fuera de un elemento
"mouseup"-------- ocurre cuando un usuario suelta un Boton del mouse sobre un elemnto
"mousemove"-------- ocurre cuando el puntero se mueve mientras està sobre un elemento

EVENTOS DE TECLADO

"keydown"-------- ocurre cuando se suelta una tecla en un elemento
"keypress"-------- ocurre cuando se presiona una tecla en un elemento
"onkeyup"-------- ocurre cuando se presiona Y se suelta en un elemento

EVENTOS DE LA INTERFAZ


"error"-------- cuando ocurre un error durante la carga de un archivo de multimedia 
"load"-------- ocurre cuando un objeto se ha cargado, funciona con el window: window.load
"beforeunload"-------- ocurre cuando te estas por ir del sitio web o del archivo
"unload"-------- ocurre cuando cuando te fuiste del archivo
"resize"-------- ocurre cuando cambia la vista del documento, la resolucion cambia
"scroll"-------- ocurre cuando se escrollea la pagina
select-------- ocurre despues de que el usuario selecciona algun texto de <input> o <textare>

TEMPORIZADORES{{{{{{{}}}}}}}

setTimeout(()=>{},tiempo)-------- sirve para ejecutar una funcion despues de cierto tiempo indicado, la funcion tambien se puede indivar mediante una variable

clearTimeout(temporizador)-------- sirve para detener la ejecucion del temporizador iniciado y se lo para como parametro

setInterval(funcion,tiempo)-------- sirve para ejecutar una fucnion repetidamente cada un intervalo de tiempo establecido

clearInterval(intervalo)--------  detiene el intevalo iniciado


switch-------- sirve para ejecutar una funcion o algo cuando la condicion se cumple, es la que esta dentro del parametro de switch, y ejecuta segun su valor, como un if-else if, el break termina la ejecucion si se cumple alguno de los casos y el default es para que cuando no se cumple ninguna se ejecute algo, es como el else

let cosa = "segudo";
switch (cosa) {
  case "primero":
    alert("fue el primero");
    break;
  case "segundo":
    alert("fue el segundo");
    break;
  default:
    alert("no hizo nada");
}





MANEJO DE EXEPCIONES{{{{{{}}}}}}

una exepcion es un error


*/

try {
  
}