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

  preview.style.backgroundImage = `url(./assets/imgs/${imagenSrc})`;
});

// 2)Evento btn registrar (ok)
btnRegistrar.addEventListener("click", () => {
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
    } else if (tipo == "Águila") {
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
  <img src="./assets/imgs/${imagenSrc}" class="card-img-top img-thumbnail" alt="${element.name}"  data-bs-toggle="modal" onclick='verFicha(${i})'>
  <div class="d-grid mx-auto">
    <button onclick="playSound('${element.name}')" type="button" class="btn btn-secondary"><img height="25px" src="./assets/imgs/audio.svg"</button>
  </div>
</div>
`;

  });
}

//4)modal



// function mostrarAnimal(){
//     let ficha=
// };
// function agregarDatos(){

// }
// btnRegistrar.addEventListener("click",()=>{
//   async function getPosts() {
//     try {
//       let data = await fetch("animales.json");
//       let respuesta = await data.json();
//       let post = "";
//       respuesta.forEach((animales) => {
//         post += `<ul class="lista p-4 mx-auto my-3 col-5"><li><h3>${animales.name}</h3><p>${animales.imagen}</p></li></ul>`;
//       });
//       postData.innerHTML = post; //Debe estar fuera del forEach porque modifica el DOM en una sola vuelta y no en varias
//     } catch (e) {
//       console.log(e);
//     }
//   }
// });

// let Animal = new Animal ('leon')

// //instanciar

// //función mostrar datos en tarjetas
// mostrarAnimal(){
//   let ficha= `<div class="card text-bg-dark" style="width: 18rem;">
//   <img src="${this.img}" class="card-img-top" alt="${this.nombre}">
//   <div class="card-body">
//   <h3>${this.nombre}</h3>
//   <h5>${this.edad}</h5>
//   <h3>Comentarios</h3>
//     <p class="card-text">${this.comentarios}</p>
//   </div>
// </div>`;
//   return ficha;
// }
