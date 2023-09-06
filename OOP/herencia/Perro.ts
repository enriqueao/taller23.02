import { Animal } from "../abstraccion/Animal";

export class Perro extends Animal {

  constructor(edad: number, peso: number){
    super(edad, peso);
  }

  emitirSonido(){
    console.log('wow wow wow');
  }
}


