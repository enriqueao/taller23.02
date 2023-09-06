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




const loki = new Perro(7, 23);
const michi = new Gato(2, 5);
const cuidador = new Cuidador();


cuidador.acaricia(loki);
cuidador.acaricia(michi);
cuidador.cuidarOneYear(michi);
cuidador.cuidarOneYear(michi);
cuidador.cuidarOneYear(loki);

console.log(michi);
console.log(loki);