import { Gato } from "./Gato";
import { Perro } from "./Perro";

const loki = new Perro(7, 23);
const michi = new Gato(2, 5);

console.log(loki.emitirSonido());
console.log(michi.emitirSonido());
