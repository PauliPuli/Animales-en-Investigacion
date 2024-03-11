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

    alert("Todos los campos son obligatorios"); //está mostrando este error aunque tenga comentarios
  }
});

//3)función agregar ficha
function addCard(){
  registro.innerHTML="";

animalList.forEach((element, i)=>{

registro.innerHTML += `
<div class="card bg-dark" style="width: 12.5rem; height: 12.5 rem;">
  <img src="./assets/imgs/${imagenSrc}" class="card-img-top img-thumbnail" alt="${element.name}" type="button" data-bs-toggle="modal" data-bs-target="ficha" onclick="verFicha('${i}')" id="notas">
  <div class="d-grid mx-auto">
    <button onclick="playSound('${sonido}')" type="button" class="btn btn-secondary"><img height="25px" src="./assets/imgs/audio.svg"</button>
  </div>
</div>
`;

  });
}

window.playSound = ()=>{
  let animal= animalList.find((element) => element.name === animal);
  if (tipo == 'Leon') {
    animal.rugir()
  }else if(tipo == 'Lobo'){
    animal.aullar()
  }else if(tipo == 'Oso'){
    animal.gruñir()
  }else if(tipo == 'Serpiente'){
    animal.sisear()
  } else {
    animal.chillar()
  }
}


//4)modal

//función mostrar datos en tarjetas
window.verFicha=(i)=>{
  // modalBody.innerHTML='';
  const modalBody= document.getElementById("notas")[0];
  animalList[i];
  modalBody.innerHTML = `<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
  <div class="modal fade" id="ficha" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <img src='./assets/imgs/${animalList._img}'>
        <h2>${animalList._nombre}</h2>
        <p>${animalList._edad}</p>
        <p>${animalList._comentarios}</p>
      </div>

    </div>
  </div>
</div>
</div>`;

}

