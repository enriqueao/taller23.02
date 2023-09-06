export class Animal {
  private edad: number;
  private especie: string;
  private genero: boolean;
  private peso: number;

  constructor (edad: number, peso: number) {
    this.edad = edad;
    this.peso = peso;
  }

  envejecer(){
    this.edad = this.edad + 1;
  }

  emitirSonido(){
    console.log('emite sonido');
  }

  setEspecie(especie: string): void{
    this.especie = especie;
  }

  setGenero(genero: boolean): void{
    this.genero = genero;
  }

  getInfo(){
    return {
      edad: this.edad,
      especie: this.especie,
      genero: this.genero ? 'MACHO' : 'HEMBRA',
      peso: `${this.peso} Kg`
    };
  }

}


