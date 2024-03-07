import Animal from "./Animal.js";
const audioPlayer= document.getElementById('player');

class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    rugir(){
        console.log(getSonido());
        audioPlayer.src = `${this._sonido}`;
        return `El ${this._name} ruge`;
    }
}
class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    aullar(){
        console.log(getSonido());
        audioPlayer.src = `${this._sonido}`;
        return `El ${this._name} aulla`;
    }
}

class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    gruñir(){
        console.log(getSonido());
        audioPlayer.src = `${this._sonido}`;
        return `El ${this._name} gruñe`;
    }
}

class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    sisear(){
        console.log(getSonido());
        audioPlayer.src = `${this._sonido}`;
        return `El ${this._name} sisea`;
    }
}

class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }
    chillar(){
        console.log(getSonido());
        audioPlayer.src = `${this._sonido}`;
        return `El ${this._name} chilla`;
    }
}

export {Leon, Lobo, Oso, Serpiente, Aguila}