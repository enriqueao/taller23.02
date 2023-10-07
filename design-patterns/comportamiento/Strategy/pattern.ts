interface ITransportStrategy {
  selectTransport(): void;
}

class Bus implements ITransportStrategy {
  selectTransport(): void {
    throw new Error("Method not implemented.");
  }
}

class Bike implements ITransportStrategy {
  selectTransport(): void {
    throw new Error("Method not implemented.");
  }
}

class Uber implements ITransportStrategy {
  selectTransport(): void {
    throw new Error("Method not implemented.");
  }
}

class Car implements ITransportStrategy {
  selectTransport(): void {
    throw new Error("Method not implemented.");
  }
}

class Walk implements ITransportStrategy {
  selectTransport(): void {
    throw new Error("Method not implemented.");
  }
}

class TransportContext {
  transportStrategy: ITransportStrategy;

  constructor(strategy: ITransportStrategy){
    this.transportStrategy = strategy;
  }

  chooseTransport(): void {
    this.transportStrategy.selectTransport();
  }
}


// The client code

class TransportMain {

  static transportSelected: ITransportStrategy;

  static main(mode: string): void {
    const modes = {
      'Bus': new Bus(),
      'Bike': new Bike(),
    }
    new TransportMain.selectTransport(modes[mode]);
  }


  static selectTransport(strategy: ITransportStrategy) {
    this.transportSelected = strategy;
    const transportContext = new TransportContext(strategy);
    transportContext.chooseTransport();
  }

  static getTransport(){
    return
  }

  static createRoute(a: string, b: string){
    const transport = this.transportSelected;
  }

}


TransportMain.main('Walk');
TransportMain.createRoute('Av. de las ciencias', 'Centro de Querétaro')