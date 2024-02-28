class Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        this._nombre=nombre;
        this._edad=edad;
        this._img=img;
        this._comentarios=comentarios;
        this._sonido=sonido;
    }
    get nombre(){
        return this._nombre;
    }
    get edad(){
        return this._edad;
    }
    get img (){
        return this._img;
    }
    get comentarios(){
        return this._comentarios;
    }
    get sonido (){
        return this._sonido;
    }
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
}