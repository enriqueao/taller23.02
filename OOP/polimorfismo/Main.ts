import { Gato } from "../herencia/Gato";
import { Perro } from "../herencia/Perro";
import { Cuidador } from "./Cuidador";

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
