import { Animal } from "../abstraccion/Animal";

export class Gato extends Animal {
  constructor(edad: number, peso: number) {
    super(edad, peso);
  }

  emitirSonido() {
    console.log('miu miu miu');
  }
}
