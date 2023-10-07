interface Observer {
  update(): void;
}

interface Observable {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}


class Twitch implements Observable {
  private subscribers: Observer[] = [];
  private lastMessage: string;

  attach(observer: Observer): void {
    this.subscribers.push(observer)
  }

  detach(observer: Observer): void {
    // este de aqui lo tienen que hacer ustedes como ejercicio
  }

  notify(): void {
    for(let subscriber of this.subscribers) {
      subscriber.update();
    }
  }

  onLive(message: string): void {
    this.lastMessage = message;
    this.notify();
    console.log('new message sendend to subscribers');
  }

  getLastMessage(): string {
    return this.lastMessage;
  }

}


class Subscriber implements Observer {
  private observable;

  constructor(observable: Observable) {
    this.observable = observable;
  }

  update(): void {
    console.log('Notificacion recibida');
    console.log(this.observable as Subscriber);
  }

}

const twitch = new Twitch();

let s1 = new Subscriber(twitch);
let s2 = new Subscriber(twitch);
let s3 = new Subscriber(twitch);

twitch.attach(s1);
twitch.attach(s2);
twitch.detach(s2);

twitch.onLive('notifica que esta onLive');