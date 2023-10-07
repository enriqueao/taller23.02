import { Animal } from "../abstraccion/Animal";
import { Gato } from "../herencia/Gato";
import { Perro } from "../herencia/Perro";

export class Cuidador {
  constructor(){}

  acaricia (animal: Animal) {
    console.log('Acariciando');
    animal.emitirSonido();
  }

  cuidarOneYear(animal: Animal) {
    animal.envejecer();
  }
}
