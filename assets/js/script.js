import { Leon, Lobo, Oso, Serpiente, Aguila } from "./modulo/Tipo.js";
import animalesData from "./modulo/iife.js";

const animalSelect = document.getElementById("animal");
const edad = document.getElementById("edad");
const comentarios = document.getElementById("comentarios");
const preview = document.getElementById("preview");
const btnRegistrar = document.getElementById("btnRegistrar");
const registro = document.getElementById("Animales");

let imagenSrc;
let sonido;
let animalList = [];

//1)Eventos del preview (ok)

animalSelect.addEventListener("change", async () => {

  const animal = animalSelect.value;
  const animales = await animalesData.getData();
  const animalData = animales.find((element) => element.name === animal);
  console.log(animalData);
  imagenSrc = animalData.imagen;
  sonido= animalData.sonido

  preview.style.backgroundImage = `url(./assets/imgs/${imagenSrc})`;
});

// 2)Evento btn registrar (ok)
btnRegistrar.addEventListener("click", async() => {
  
  const tipo = animalSelect.value;
  const age = edad.value;
  const comments = comentarios.value;
  const images = imagenSrc;
  const sound = sonido;

  if (tipo && age && comments) {
    let especie;
    if (tipo == "Leon") {
      especie = new Leon(tipo, age, images, comments, sound);
    } else if (tipo == "Lobo") {
      especie = new Lobo(tipo, age, images, comments, sound);
    } else if (tipo == "Oso") {
      especie = new Oso(tipo, age, images, comments, sound);
    } else if (tipo == "Serpiente") {
      especie = new Serpiente(tipo, age, images, comments, sound);
    } else if (tipo == "Aguila") {
      especie = new Aguila(tipo, age, images, comments, sound);
    }

    animalList.unshift(especie);
    console.log(animalList);
    addCard()
  } else {

    alert("Todos los campos son obligatorios"); 
  }
});

//3)función agregar ficha (sonido=ok)
function addCard(){
  registro.innerHTML="";

animalList.forEach((element, i)=>{

registro.innerHTML +=
`<div class="card bg-dark m-2 border-0" style="width: 12.5rem; height: 12.5 rem;">
<img src="./assets/imgs/${element.img}" class="card-img-top" alt="${element.name}" type="button" data-bs-toggle="modal" data-toggle="modal" data-target="#exampleModal" onclick="verFicha('${i}')" id="notas">
<div class="d-grid m-0">
  <button onclick="playSound('${sonido}')" type="button" class="btn btn-secondary w-100"><img height="25px" src="./assets/imgs/audio.svg"</button>
</div>
</div>` 

  });
}


window.playSound = (tipo) => {
  const sound = new Audio(`./assets/sounds/${tipo}`);
  sound.play();
};

//4)modal

//función mostrar datos en tarjetas
window.verFicha=(i)=>{

  const modalBody= document.getElementsByClassName("modal-body")[0];
  const ani =animalList[i];
  modalBody.innerHTML = 
`<div class="card bg-dark w-100 mx-auto text-white border-0" style="width: 18rem;">
<img src="./assets/imgs/${ani.img}" class="card-img-top " alt="${ani.nombre}">
<div class="card-body">
  <h5 class="card-title">${ani.nombre}</h5>
  <p class="card-text"><small class="text-body-secondary">${ani.edad}</small></p>
  <hr class="opacity-100 filete">
  <p class="card-text">${ani.comentarios}</p>
</div>
</div>`
;

}



//Primer intento
// window.playSound = ()=>{
//   let animal= animalList.find((element) => element.name === animal);
//   console.log(animal)
//   if (tipo == 'Leon') {
//     animal.rugir()
//   }else if(tipo == 'Lobo'){
//     animal.aullar()
//   }else if(tipo == 'Oso'){
//     animal.gruñir()
//   }else if(tipo == 'Serpiente'){
//     animal.sisear()
//   } else {
//     animal.chillar()
//   }
// }

//Ejemplo profe dentro de la function addcard()
// <div class="card bg-dark" style="width: 12.5rem; height: 12.5 rem;">
//   <img src="./assets/imgs/${element.img}" class="card-img-top img-thumbnail" alt="${element.name}" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="verFicha('${i}')">
//   <div class="d-grid mx-auto">
//     <button onclick="playSound('${element.sonido}')" type="button" class="btn btn-secondary"><img height="25px" src="./assets/imgs/audio.svg"</button>
//   </div>
// </div>
// `;
