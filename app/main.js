import BirdController from "./controllers/BirdController.js";


class App {
  constructor() {
    console.log("Hello from main.js")
    this.controllers = {
      birdController: new BirdController()
    }
  }
}

window["app"] = new App()