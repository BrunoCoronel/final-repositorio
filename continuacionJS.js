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
window.location.
window.location.
window.
window.
window.
window.aa
window.
window.
window.
window.








*/
