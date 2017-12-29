import { Observable } from "tns-core-modules/data/observable";

export class Cat {
  constructor(public url: string) {
  }
}

export class HelloWorldModel extends Observable {
  public cats: Array<Cat> = [];

  constructor() {
    super();
    this.loadCats();
  }

  public loadCats() {
    const newCats: Array<Cat> = [];
    for (let i = 0; i < 18; i++) {
      newCats.push(new Cat("http://thecatapi.com/api/images/get?size=med&type=jpg&rand=" + Math.random()));
    }
    this.set("cats", newCats);
  }
}