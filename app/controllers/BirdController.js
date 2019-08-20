import BirdService from "../services/BirdService.js";

// PRIVATE
let _birdService = new BirdService();

function _draw() {
  let birdNameElement = document.querySelector("#bird-name");
  let feedCountElement = document.querySelector("#feed-count");
  let bird = _birdService.Bird

  birdNameElement.textContent = bird.name;
  feedCountElement.textContent = bird.foodCount.toString();

}

// PUBLIC
export default class BirdController {
  constructor() {
    console.log("Hello from Bird Controller")
  }

  // let server know the user wants to feed the bird
  food() {
    _birdService.food();
    _draw()
  }

  // let server know the user wants to give the bird a cracker
  cracker() {
    _birdService.cracker();
    _draw();
  }
}