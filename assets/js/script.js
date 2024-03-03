import {Leon, Lobo, Oso, Serpiente, Aguila} from "./modulo/Tipo.js";
function mostrarAnimal(){
    let ficha= 
};
function agregarDatos(){
    let nombre= document.getElementById('animal').value;
    let edad= document.getElementById('edad').value;
    let comentarios= document.getElementById('comentarios').value;
    let btnRegistrar= document.getElementById('btnRegistrar');

}
btnRegistrar.addEventListener("click",()=>{
  async function getPosts() {
    try {
      let data = await fetch("animales.json");
      let respuesta = await data.json();
      let post = "";
      respuesta.forEach((animales) => {
        post += `<ul class="lista p-4 mx-auto my-3 col-5"><li><h3>${animales.name}</h3><p>${animales.imagen}</p></li></ul>`;
      });
      postData.innerHTML = post; //Debe estar fuera del forEach porque modifica el DOM en una sola vuelta y no en varias
    } catch (e) {
      console.log(e);
    }
  }
});

let Animal = new Animal ('leon')


//instanciar


//función mostrar datos en tarjetas
mostrarAnimal(){
  let ficha= `<div class="card text-bg-dark" style="width: 18rem;">
  <img src="${this.img}" class="card-img-top" alt="${this.nombre}">
  <div class="card-body">
  <h3>${this.nombre}</h3>
  <h5>${this.edad}</h5>
  <h3>Comentarios</h3>
    <p class="card-text">${this.comentarios}</p>
  </div>
</div>`;
  return ficha;
}